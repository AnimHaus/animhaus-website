const params = new URLSearchParams(window.location.search);
const projectIdFromUrl = params.get("project");
const projectIdFromPage = window.__ARTWORK_PROJECT_ID__;

// Match homepage header behavior on artwork routes.
const artworkNav = document.querySelector('nav');
const artworkLogotype = document.querySelector('.logotype');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!artworkNav || !artworkLogotype) return;

  if (scrollTop > 100) {
    artworkNav.classList.add('scrolled');
    artworkLogotype.classList.add('hidden');
  } else {
    artworkNav.classList.remove('scrolled');
    artworkLogotype.classList.remove('hidden');
  }
});

fetch("/data/artworks.json")
  .then(res => res.json())
  .then(data => {

    const fallbackProjectId = Object.keys(data)[0];
    const projectId = (projectIdFromPage && data[projectIdFromPage])
      ? projectIdFromPage
      : (projectIdFromUrl && data[projectIdFromUrl] ? projectIdFromUrl : fallbackProjectId);
    const project = data[projectId];
    if (!project) return;

    const pageTitle = `${project.title} | AnimHaus Studios`;
    document.title = pageTitle;

    // Dynamic Meta Tags
    const updateMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.setAttribute('content', content);
    };

    updateMeta('description', project.description);
    updateMeta('og:title', pageTitle, true);
    updateMeta('og:description', project.description, true);
    updateMeta('og:image', project.cover, true);
    updateMeta('og:url', window.location.href, true);

    // Dynamic Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      "name": project.title,
      "description": project.description,
      "image": project.cover,
      "creator": {
        "@type": "Organization",
        "name": "AnimHaus Studios"
      },
      "dateCreated": project.year,
      "genre": project.category
    };

    if (project.tagline) {
      structuredData.abstract = project.tagline;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    document.getElementById("title").innerText = project.title;
    const taglineEl = document.getElementById("tagline");
    if (project.tagline) {
      taglineEl.innerText = project.tagline;
      taglineEl.style.display = "";
    } else {
      taglineEl.innerText = "";
      taglineEl.style.display = "none";
    }
    document.getElementById("description").innerText = project.description;

    document.getElementById("year").innerText = project.year;
    document.getElementById("category").innerText = project.category;
    document.getElementById("theme").innerText = project.theme;

    document.getElementById("coverImage").src = project.cover;

    // gallery
    // const gallery = document.getElementById("gallery");
    // project.gallery.forEach(img => {
    //   gallery.innerHTML += `<img src="${img}" />`;
    // });

    // // process
    // const process = document.getElementById("process");
    // project.process.forEach(img => {
    //   process.innerHTML += `<img src="${img}" />`;
    // });

    // credits
    const credits = document.getElementById("credits");
    for (let key in project.credits) {
      credits.innerHTML += `<p><strong>${key}:</strong> ${project.credits[key]}</p>`;
    }

  });
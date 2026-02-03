const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");

fetch("/data/artworks.json")
  .then(res => res.json())
  .then(data => {

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
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      "name": project.title,
      "abstract": project.tagline,
      "description": project.description,
      "image": project.cover,
      "creator": {
        "@type": "Organization",
        "name": "AnimHaus Studios"
      },
      "dateCreated": project.year,
      "genre": project.category
    });
    document.head.appendChild(script);

    document.getElementById("title").innerText = project.title;
    document.getElementById("tagline").innerText = project.tagline;
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
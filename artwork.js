const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");

fetch("/data/artworks.json")
  .then(res => res.json())
  .then(data => {

    const project = data[projectId];
    if (!project) return;

    document.title = project.title;

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
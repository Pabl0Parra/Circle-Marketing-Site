async function getData() {
  let urlLimit3 = [`http://jsonplaceholder.typicode.com/posts/?_limit=3`];
  try {
    let res = await fetch(urlLimit3);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderData() {
  let info = await getData();
  let dataCard = "";
  info.forEach((item) => {
    let cardInfo = `<article class="projectsArticle">
                        <img
                        src="../assets/projects-section/${item.id}.jpg"
                        alt="project image"
                        class="project-img"/>
                        <div class="project-text">
                            <h3  class="data-title">${
                              item.title.split(" ")[0]
                            } ${item.title.split(" ")[1]}</h3>
                                <div class="text data-body">
                                    ${item.body}
                                </div>
                                <a href="./pages/projects.html" class="learn-more"                >Learn more</a>
                        </div>
                    </article>`;

    return (dataCard += cardInfo);
  });

  let container = document.querySelector(".projectsArticles");
  console.log(container);
  container.innerHTML = dataCard;
}

renderData();

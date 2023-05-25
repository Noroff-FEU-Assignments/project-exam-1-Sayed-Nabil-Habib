const apiBase = "https://www.sayed.codes";
const pagePosts = "/wp-json/wp/v2/posts/";

let currentPage = 1;
const perPage = 10;
let allPostLoaded = false;
let all = [];

const resultContainer = document.querySelector(".slider");
const showMoreBtn = document.querySelector("#show_more");
const search = document.querySelector(".search");

async function getPosts() {
  try {
    const fullPageUrl = `${apiBase}${pagePosts}?per_page=${perPage}&page=${currentPage}`;
    const response = await fetch(fullPageUrl);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      const mediaResponse = await fetch(data[i]._links["wp:featuredmedia"][0].href);
      const mediaData = await mediaResponse.json();

      const dateWithoutHours = new Date(data[i].date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      resultContainer.innerHTML += `
        <div class="destinations">
          <div class="slider">
            <div class="slide">
              <a href="../htmls/details.html?id=${data[i].id}">
                <img class="posts-images" src="${mediaData.source_url}" alt="${data[i].title.rendered}">
                <h5 class="title">${data[i].title.rendered}</h5>
                <p class="content">${data[i].excerpt.rendered}</p>
                <p class="post_date">${dateWithoutHours}</p>
                <h4 class="read-more">Read more</h4>
              </a>
            </div>
          </div>
        </div>`;

      all.push(data[i]);
    }

    if (data.length < perPage) {
      allPostLoaded = true;
      showMoreBtn.style.display = "none";
    }
  } catch (error) {
    resultContainer.innerHTML += `<div>Could not fetch data, please try again later</div>`;
    console.log("Error:", error);
  }
}

async function loadMorePosts() {
  if (!allPostLoaded) {
    currentPage++;
    await getPosts();
  }
}

getPosts();
showMoreBtn.addEventListener("click", loadMorePosts);


// Search codes here
search.onkeyup = async function (event) {
  const searchValue = event.target.value.trim().toLowerCase();

  const filteredPosts = all.filter(function (post) {
    return post.title.rendered.toLowerCase().startsWith(searchValue);
  });

  resultContainer.innerHTML = "";

  for (let i = 0; i < filteredPosts.length; i++) {
    
    const mediaResponse = await fetch(filteredPosts[i]._links["wp:featuredmedia"][0].href);
    const mediaData = await mediaResponse.json();

    resultContainer.innerHTML += `
        <div class="destinations">
          <div class="slider">
            <div class="slide">
              <a href="../htmls/details.html?id=${filteredPosts[i].id}">
                <img class="posts-images" src="${mediaData.source_url}" alt="${filteredPosts[i].title.rendered}">
                <h5 class="title">${filteredPosts[i].title.rendered}</h5>
                <p class="content">${filteredPosts[i].excerpt.rendered}</p>
                <h4 class="read-more">Read more</h4>
              </a>
            </div>
          </div>
        </div>`;
  }
};

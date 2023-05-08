const apiBase = "https://www.sayed.codes";
const pagePosts = "/wp-json/wp/v2/posts/";
const fullPageUrl = apiBase + pagePosts + "?per_page=20";

const resultContainer = document.querySelector(".slider")



async function getPosts(){

  const response = await fetch(fullPageUrl);
  const data = await response.json();

  resultContainer.innerHTML = "";

  for(let i = 0; i < data.length; i++){

    const mediaResponse = await fetch(data[i]._links["wp:featuredmedia"][0].href);
    const mediaData = await mediaResponse.json();

    resultContainer.innerHTML += 
    `
  <div class="destinations">
    <div class="slider">
      <div class="slide">
        <a href="#">
          <img class="posts-images" src="${mediaData.source_url}" alt="${data[i].title.rendered}">
            <h5 class="title">  ${data[i].title.rendered}</h5>
            <p class="content">  ${data[i].excerpt.rendered}</p>
            <h4 class="read-more">Read more</h4>
            </a>
            </div>
               </div>
                
</div>`
  }
  
   console.log(data)
}
getPosts();

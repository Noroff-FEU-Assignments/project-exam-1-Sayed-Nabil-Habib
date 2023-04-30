const apiBase = "http://www.sayed.codes";
const pagePosts = "/wp-json/wp/v2/posts/";
const fullPageUrl = apiBase + pagePosts;

const resultContainer = document.querySelector(".posts")



async function getPosts(){

  const response = await fetch(fullPageUrl);
  const data = await response.json();

  resultContainer.innerHTML = "";

  for(let i = 0; i < data.length; i++){

    resultContainer.innerHTML += 
    `
  <div class="destinations">
    <div class="slider">
      <div class="slide">
        <a href="#">
          <img class="posts-images" src="${data[i].featured_media}" alt="${data[i].title.rendered}">
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

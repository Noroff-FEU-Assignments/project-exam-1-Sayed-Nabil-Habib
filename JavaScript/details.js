const resultContainer = document.querySelector(".container_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url ="http://www.sayed.codes/wp-json/wp/v2/posts/?search=" + id;


async function fetchDetails(){

  const response = await fetch(url);
  const data = await response.json();

  resultContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const mediaResponse = await fetch(data[i]._links["wp:featuredmedia"][0].href);
    const mediaData = await mediaResponse.json();

    resultContainer.innerHTML += 
    `
    <div class="results">
          <img class="posts-images" src="${mediaData.source_url}" alt="${data[i].title.rendered}">
            <h5 class="title">  ${data[i].title.rendered}</h5>
            <p class="content">  ${data[i].excerpt.rendered}</p>
           
    </div>`
  }
}
   

fetchDetails();


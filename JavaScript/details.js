const resultContainer = document.querySelector(".container_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const postId = params.get("id");

const url = `http://www.sayed.codes/wp-json/wp/v2/posts/${postId}`;



async function fetchDetails(){

  try{
    const response = await fetch(url);
  
    const data = await response.json();
    
  
    resultContainer.innerHTML = "";

    const title = data.title.rendered;
    const content = data.content.rendered;
    const imageUrl = data._links["wp:featuredmedia"][0].href;
  
      resultContainer.innerHTML += 
      `<div class="result">
      <h5 class="title">  ${title}</h5>   
      <img src="${imageUrl}" alt="${title}" class="post-image">
        <div class="content">${content}</div>  
     </div>`;
  
       
     
    }catch(error){
      resultContainer.innerHTML = `something bad happened`
    }
  }
  
  fetchDetails();

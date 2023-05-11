const resultContainer = document.querySelector(".container_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const postId = params.get("id");

const url = `https://www.sayed.codes/wp-json/wp/v2/posts/${postId}`;



async function fetchDetails(){

  try{
    const response = await fetch(url);
  
    const data = await response.json();
    
  
    resultContainer.innerHTML = "";

    const title = data.title.rendered;
    const content = data.content.rendered;
    const imageUrl = data._links["wp:featuredmedia"][0].href;
    const mediaResponse = await fetch(imageUrl);
    const mediaData = await mediaResponse.json();
    const featuredImageUrl = mediaData.source_url;
  
      resultContainer.innerHTML += 
      `<div class="result">
      <h5 class="title">  ${title}</h5>   
      <img src="${featuredImageUrl}" alt="${title}" class="post-image clickable">
        <div class="content">${content}</div> 
        <a href="../index.html" class="btn">To Home Page</a> 
     </div>`;

     const clickableImages = resultContainer.querySelector(".clickable");
     clickableImages.addEventListener("click", () =>{
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      const largedImage = document.createElement("img");
      largedImage.src = featuredImageUrl;
      largedImage.alt = title;

      overlay.appendChild(largedImage);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay)
      })
     })
       
     
    }catch(error){
      resultContainer.innerHTML = `something bad happened`
    }
  }
  
  fetchDetails();

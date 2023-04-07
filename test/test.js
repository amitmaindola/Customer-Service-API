async function sendReq(){
    let headersList = {
    
    }
    
    let bodyContent = new FormData();
    bodyContent.append("image", document.getElementById("image").files[0]);
    
    let response = await fetch("http://localhost:3000/api/v1/upload-post-image/", { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
    
    let data = await response.text();
    document.body.innerHTML = data;
    console.log(data);
}

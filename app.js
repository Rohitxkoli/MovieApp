let ip = document.querySelector("#ip");
let btn = document.querySelector("#btn");

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.hero div').style.opacity = '0';
  document.getElementById('nameDiv').style.visibility = 'hidden';
  document.querySelector(".hero").style.backgroundImage = "url('./assest/entermovie.jpg')";

});


var inputElement = document.getElementById('ip');
inputElement.addEventListener('keydown', function(event) {
     if (event.key === 'Enter') {
         btn.click();
     }
});


btn.addEventListener("click",()=>{

  let api = `https://www.omdbapi.com/?t=${ip.value}&apikey=86346bdd`;

let promise = fetch(api);
promise.then((raw) => raw.json())
.then((data)=>{

console.log(data);

  // if(data.Responce) Response: "False"
  if(data.Response == "False"){
    console.log('error');
    document.querySelector(".hero").style.backgroundImage = "url('./assest/404.png')";
    document.querySelector(".data").style.visibility = "hidden";
    document.querySelector('.hero div').style.opacity = '0'; 
    document.getElementById('nameDiv').style.visibility = 'hidden';
    alert("Movie Is Not Found Please Try Again!");
    ip.value = "";
  }
  else {
    document.querySelector(".hero").style.backgroundColor = "#E7DFC8";
    document.querySelector(".hero").style.backgroundImage = "none";
    document.querySelector("#movieImg").src = data.Poster;
    document.querySelector("#title").textContent = data.Title;
    document.querySelector("#year").textContent = `(${data.Year})`; 
    document.querySelector("#date").textContent = `Release date : ${data.Released}`;
    document.querySelector("#runtime").textContent = `Runtime : ${data.Runtime}`;
    document.querySelector("#genre").textContent = `Genre : ${data.Genre}`;
    document.querySelector("#director").textContent = `Director : ${data.Director}`;
    document.querySelector("#actor").textContent = `Actors : ${data.Actors}`;
    document.querySelector("#plot").textContent = `Plot : ${data.Plot}`;
    document.querySelector("#language").textContent = `Language : ${data.Language}`;
    document.querySelector("#imdbRating").textContent = `ImdbRating : ${data.imdbRating}`;
    document.querySelector('.hero div').style.opacity = '1'; 
    document.getElementById('nameDiv').style.visibility = 'visible';
    document.querySelector(".data").style.visibility = "visible";
  
  }
  
   
}) 


  

})





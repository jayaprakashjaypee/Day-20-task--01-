const zooanimal = document.querySelector(".zooanimals");
const btn = document.querySelector("button");
function getdata() {
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((res) => res.json())
    .then((data) => {
      zooanimal.innerHTML = `
        <div class="card-body">
         <img class="img-fluid imagesize" src="${data.image_link}">
        <p class="mb-1 fs-5">Name: <span class="text-primary fw-bolder">${data.name}</span></p>
        <p class="mb-1 fs-5">Animal Type: <span class="text-primary fw-bolder">${data.animal_type}</span></p>
    </div>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getdata);

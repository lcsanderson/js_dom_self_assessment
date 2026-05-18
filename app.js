//******** Fetch method per Claude reccomendation ********

// fetch("airbnb_sf_listings_500.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.getElementById("card-container"); // card-container is specific div in index.html
//     const firstFifty = data.slice(0, 50); // gets just first 50 items from json file

//     firstFifty.forEach((item) => {
//       const card = document.createElement("div");
//       card.className = "card";
//       card.style.width = "18rem";

//       card.innerHTML = `
//         <img src="${item.picture_url}" class="card-img-top" alt="${item.name}">
//         <div class="card-body">
//           <h5 class="card-title">${item.name}</h5>
//           <p class="card-text">${item.description}</p>
//           <a href="${item.listin_url}" class="btn btn-primary">See listing on AirBnb</a>
//         </div>
//         `;

//       container.appendChild(card);
//     });
//   })
//   .catch((error) => console.error("Error loading JSON:", error));

//********* AJAX Method per assignment guidelines ********

const xhr = new XMLHttpRequest();
xhr.open("GET", "airbnb_sf_listings_500.json", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const container = document.getElementById("card-container");
    const firstFifty = data.slice(0, 50);

    firstFifty.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.width = "18rem";

      card.innerHTML = ` 
        <img src="${item.picture_url}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
           <h5 class="card-title">${item.name}</h5>
           <p class="card-text">${item.description}</p>
           <a href="${item.listing_url}" class="btn btn-primary">See listing on AirBnb</a>
         </div>
        `;

      container.appendChild(card);
    });
  } else {
    console.error("Error loading JSON:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();

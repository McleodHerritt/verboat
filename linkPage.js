const data = {
  name: "SeaRay 175 Sport",
  length: 17,
  location: {
    city: "Valrico",
    state: "Florida",
  },
  year: 2009,
  price: 10500,
  img: "images/homePage/SeaRay175Sport.png",
  description: `FULLY REFITTED 2023 ONLY 22 HOURS!!!! Like new 
    CONDITION 2016 nortech 392 brings the style of 
    fishing and pleasure this one of a kind totally refitted in 
    June of 2023 Brand new 2023 mercury 450r Only 22 
    hours 8 brand new battery odeesy extreme New 
    upholstery 25k New electronics twin 8616 New 
    vessel view 903 New Seadeck diamond cut New JL 
    audio speaker with led Crazy sound system All new 
    multifunction lumitec spectrum lights Flir night vision..`,
};

const similar_boats = [
  {
    name: "Sailfish 19",
    length: 19,
    location: {
      city: "St Petersburg",
      state: "Florida",
    },
    year: 1995,
    price: 3500,
    img: "images/homePage/Sailfish19.png",
  },

  {
    name: "Sea Swirl",
    length: 21,
    location: {
      city: "Clearwater",
      state: "Florida",
    },
    year: 1996,
    price: 17500,
    img: "images/homePage/Sea-Swirl.png",
  },

  {
    name: "Sunbird 200",
    length: 20,
    location: {
      city: "Clearwater",
      state: "Florida",
    },
    year: 1996,
    price: 2500,
    img: "images/homePage/Sunbird200.png",
  },

  {
    name: "SeaRay 175 Sport",
    length: 17,
    location: {
      city: "Valrico",
      state: "Florida",
    },
    year: 2009,
    price: 10500,
    img: "images/homePage/SeaRay175Sport.png",
  },
];

const link_container = document.getElementById("link-container");

// Create a section element
const section = document.createElement("section");
section.classList.add("boat-section");
link_container.appendChild(section);

// Create a div element for the main image
const main_image_container = document.createElement("div");
main_image_container.classList.add("main-image-container");

// Create an img element and set its source
const img = document.createElement("img");
img.src = data.img;
img.alt = data.name;
img.classList.add("boat-image");
main_image_container.appendChild(img);

// Create a div for the info section
const main_info_container = document.createElement("div");
main_info_container.classList.add("main-info-container");

const nameElem = document.createElement("h1");
nameElem.textContent = data.name;
nameElem.classList.add("boat-name");
main_info_container.appendChild(nameElem);

const lengthElem = document.createElement("p");
lengthElem.textContent = `Length: ${data.length} ft`;
lengthElem.classList.add("boat-length");
main_info_container.appendChild(lengthElem);

const locationElem = document.createElement("p");
locationElem.textContent = `Location: ${data.location.city}, ${data.location.state}`;
locationElem.classList.add("boat-location");
main_info_container.appendChild(locationElem);

const yearElem = document.createElement("p");
yearElem.textContent = `Year: ${data.year}`;
yearElem.classList.add("boat-year");
main_info_container.appendChild(yearElem);

const priceElem = document.createElement("p");
priceElem.textContent = `Price: $${data.price}`;
priceElem.classList.add("boat-price");
main_info_container.appendChild(priceElem);

const descriptionElem = document.createElement("p");
descriptionElem.textContent = data.description;
descriptionElem.classList.add("boat-description");
main_info_container.appendChild(descriptionElem);

const button = document.createElement("button");
button.textContent = "Open Survey";
button.classList.add("survey-button");
main_info_container.appendChild(button);
button.addEventListener("click", () => {
  window.open("survey.html", "_blank");
});

section.appendChild(main_image_container);
section.appendChild(main_info_container);

const cards_container = document.getElementById("similar-boats-container");

similar_boats.forEach((boat) => {
  const card = document.createElement("a");
  card.href = "linkPage.html";
  card.classList.add("card");
  card.innerHTML = `
    <img src="${boat.img}" alt="${boat.name}" />
    <div class="card-info">
      <h2>${boat.name}</h2>
        <p>${boat.length} ft</p>
      <div class="location-year">
      <p>${boat.location.city}, ${boat.location.state}</p>
      <p>${boat.year}</p>
      </div>
      <p>$${boat.price.toLocaleString()}</p>    
      </div>
  `;
  cards_container.appendChild(card);
});

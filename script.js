const data = [
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

  {
    name: "Boston Whaler ",
    length: 15,
    location: {
      city: "Holiday",
      state: "Florida",
    },
    year: 1995,
    price: 11000,
    img: "images/homePage/BostonWhaler.png",
  },

  {
    name: "Hurricane 257 DC ",
    length: 25,
    location: {
      city: "Hudson",
      state: "Florida",
    },
    year: 2006,
    price: 14000,
    img: "images/homePage/Hurrican257DC.png",
  },

  {
    name: "Silverton 37C ",
    length: 37,
    location: {
      city: "St Petersburg",
      state: "Florida",
    },
    year: 1986,
    price: 15000,
    img: "images/homePage/Silverton37C.png",
  },

  {
    name: "Boston Whaler ",
    length: 15,
    location: {
      city: "Holiday",
      state: "Florida",
    },
    year: 1995,
    price: 11000,
    img: "images/homePage/BostonWhaler.png",
  },

  {
    name: "Boston Whaler ",
    length: 15,
    location: {
      city: "Holiday",
      state: "Florida",
    },
    year: 1995,
    price: 11000,
    img: "images/homePage/BostonWhaler.png",
  },

  {
    name: "Boston Whaler ",
    length: 15,
    location: {
      city: "Holiday",
      state: "Florida",
    },
    year: 1995,
    price: 11000,
    img: "images/homePage/BostonWhaler.png",
  },
];

const cards_container = document.getElementById("cards-container");

data.forEach((boat) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${boat.img}" alt="${boat.name}" />
    <div class="card-info">
      <h2>${boat.name} - ${boat.length} ft</h2>
      <div class="location-year">
      <p>${boat.location.city}, ${boat.location.state}</p>
      <p>${boat.year}</p>
      </div>
      <p>$${boat.price.toLocaleString()}</p>    
      </div>
  `;
  cards_container.appendChild(card);
});

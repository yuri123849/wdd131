const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const year = document.querySelector("#currentyear");
const today = new Date();
function setActiveLink(clickedId) {
    const links = document.querySelectorAll(".navigation a");
    links.forEach(link => link.classList.remove("active"));
    document.getElementById(clickedId).classList.add("active");
}

const mainHeading = document.querySelector("main h1");

function setTitle(title) {
    mainHeading.textContent = title;
    document.title = title;
}

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Bangkok Thailand Temple",
      location: "Bangkok, Thailand",
      dedicated: "2023, October, 22",
      area: 48525,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    },
    {
      templeName: "Tokyo Japan Temple",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52700,
      imageUrl:
      "https://tokyojapantemple.jp/wp-content/uploads/2022/04/about_history-scaled.jpeg"
    },
    {
      templeName: "Osaka Japan Temple",
      location: "Osaka, Japan",
      dedicated: "2000, May, 21",
      area: 35700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/osaka-japan-temple/osaka-japan-temple-64083-main.jpg"
    }
      

          
    
  ];
const cards = document.querySelector("#cards");
  

function displayTemples(temples) {
  cards.innerHTML="";


  temples.forEach(temple =>{
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.textContent = `Location : ${temple.location}`;
    dedicated.textContent = `Dedicated : ${temple.dedicated}`;
    area.textContent = `Area : ${temple.area.toLocaleString()} sq ft`

    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    cards.appendChild(card);
});
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", ()=>{
  displayTemples(temples);
  setActiveLink("home");
  setTitle("Home");
});

document.querySelector("#old").addEventListener("click",() =>{
  const oldTemples = temples.filter(t =>
    new Date(t.dedicated).getFullYear() < 1900
  );
  displayTemples(oldTemples);
  setActiveLink("old");
  setTitle("Old Temple");
});

document.querySelector("#new").addEventListener("click",() =>{
  const newTemples = temples.filter(t =>
    new Date(t.dedicated).getFullYear() > 2000
  );
  displayTemples(newTemples);
  setActiveLink("new");
  setTitle("New Temple");
});

document.querySelector("#large").addEventListener("click",() =>{
  const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
    setActiveLink("large");
    setTitle("Large Temple");
  });
  
document.querySelector("#small").addEventListener("click",() =>{
  const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
    setActiveLink("small");
    setTitle("Small Temple");
});



year.innerHTML = today.getFullYear();


document.getElementById("lastModified").innerHTML = document.lastModified;

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


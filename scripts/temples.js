const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();


document.getElementById("lastModified").innerHTML = document.lastModified;

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
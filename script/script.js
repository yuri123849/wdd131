window.addEventListener("DOMContentLoaded", function() {
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;


  const productSelector = document.getElementById("product");
  if (productSelector) {
    const products = [
      { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
      { id: "fc-2050", name: "power laces", averagerating: 4.7 },
      { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
      { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
      { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = `${product.name} (Rating: ${product.averagerating})`;
      productSelector.appendChild(option);
    });
  }

  const form = document.getElementById("reviewForm");
  if(form){
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      let count = parseInt(localStorage.getItem("ReviewCount")) || 0;
      count++;
      localStorage.setItem("ReviewCount", count);

      window.location.href = "review.html";
    });
  }

  const reviewCountEl = document.getElementById("reviewCount");
  if(reviewCountEl){
    const count = parseInt(localStorage.getItem("ReviewCount")) || 0;
    reviewCountEl.textContent = count;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
  const productsContainer = document.getElementById("products-container");
  const reviewsContainer = document.getElementById("reviews-container");
  const reviewsList = document.getElementById("reviews-list");
  const productName = document.getElementById("product-name");

  for (const product in reviews) {
    const productDiv = document.createElement("div");
    productDiv.innerText = product;
    productDiv.style.cursor = "pointer";
    productDiv.addEventListener("click", function () {
      productName.innerText = product;
      reviewsList.innerHTML = "";
      reviewsContainer.style.display = "block";

      reviews[product].forEach((review, index) => {
        const reviewItem = document.createElement("li");
        reviewItem.innerText = review;
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        deleteButton.addEventListener("click", function () {
          reviews[product].splice(index, 1);
          if (reviews[product].length === 0) {
            delete reviews[product];
          }
          localStorage.setItem("reviews", JSON.stringify(reviews));
          location.reload();
        });
        reviewItem.appendChild(deleteButton);
        reviewsList.appendChild(reviewItem);
      });
    });
    productsContainer.appendChild(productDiv);
  }
});

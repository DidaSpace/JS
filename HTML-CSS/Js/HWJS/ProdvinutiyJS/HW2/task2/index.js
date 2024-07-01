const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      { id: "1", text: "Отличный телефон! Батарея держится долго." },
      { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [{ id: "3", text: "Интересный дизайн, но дорогой." }],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [{ id: "4", text: "Люблю играть на PS5, графика на высоте." }],
  },
];

function renderInitialData() {
  const reviewsContainer = document.getElementById("reviews-container");
  initialData.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `<h2>${product.product}</h2>`;
    product.reviews.forEach((review) => {
      const reviewDiv = document.createElement("div");
      reviewDiv.innerText = review.text;
      productDiv.appendChild(reviewDiv);
    });
    reviewsContainer.appendChild(productDiv);
  });
}

function addReview() {
  const productInput = document.getElementById("product").value.trim();
  const reviewInput = document.getElementById("review").value.trim();

  if (reviewInput.length < 50 || reviewInput.length > 500) {
    alert("Отзыв должен быть длиной от 50 до 500 символов");
    return;
  }

  let productDiv = Array.from(
    document.querySelectorAll("#reviews-container h2")
  ).find((h2) => h2.innerText === productInput)?.parentElement;

  if (!productDiv) {
    productDiv = document.createElement("div");
    productDiv.innerHTML = `<h2>${productInput}</h2>`;
    document.getElementById("reviews-container").appendChild(productDiv);
  }

  const reviewDiv = document.createElement("div");
  reviewDiv.innerText = reviewInput;
  productDiv.appendChild(reviewDiv);

  document.getElementById("product").value = "";
  document.getElementById("review").value = "";
}

window.onload = renderInitialData;

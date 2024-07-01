document
  .getElementById("review-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const product = document.getElementById("product").value.trim();
    const review = document.getElementById("review").value.trim();

    if (review.length < 50 || review.length > 500) {
      alert("Отзыв должен быть длиной от 50 до 500 символов");
      return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || {};

    if (!reviews[product]) {
      reviews[product] = [];
    }

    reviews[product].push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("product").value = "";
    document.getElementById("review").value = "";
    alert("Отзыв добавлен!");
  });

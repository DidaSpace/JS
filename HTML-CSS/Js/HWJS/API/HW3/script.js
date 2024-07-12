const accessKey = "";

const imageContainer = document.getElementById("unsplash-image");
const photographerName = document.getElementById("photographer-name");
const likeButton = document.getElementById("like-button");
const likeCountP = document.getElementById("like-count");

let likesCount = 0;

function fetchRandomImage() {
  fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
    .then((response) => response.json())
    .then((data) => {
      imageContainer.src = data.urls.regular;
      photographerName.textContent = `Фотограф: ${data.user.name}`;
      likesCount = data.likes;
      likeCountP.textContent = likesCount;
    })
    .catch((error) => console.error("Error fetching image:", error));
}

likeButton.addEventListener("click", function () {
  likesCount++;
  likeCountP.textContent = likesCount;
});

fetchRandomImage();

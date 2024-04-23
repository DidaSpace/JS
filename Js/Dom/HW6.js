// Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

// В блоке Featured Items небходимо реализовать шаблон товаров.

// Для этого необходимо создать json формат данных по всем товарам.

// Из этого файла сформировать блок Featured Items.

// Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется.

const data = JSON.parse(DATAJS);
console.log(data);
const productsFeaturedEl = document.querySelector("div.products__fetured");
console.log(productsFeaturedEl);
data.forEach((element) => {
  const figureEl = document.createElement("figure");
  figureEl.className = element.class;

  const divEl = document.createElement("div");
  divEl.classList.add("products__image");

  const imgEl = document.createElement("img");
  imgEl.classList.add("imgEl");
  imgEl.src = element.img;

  const hoverButtonEl = document.createElement("button");
  hoverButtonEl.classList.add("hover__button");

  const hoverImgEl = document.createElement("img");
  hoverImgEl.classList.add("hover__img");
  hoverImgEl.src = element.imgButton;
  hoverButtonEl.appendChild(hoverImgEl);

  const textNode = document.createTextNode(element.button);

  const figcaptionEl = document.createElement("figcaption");
  figcaptionEl.classList.add("item__title");
  figcaptionEl.innerHTML = element.title;

  const p1El = document.createElement("p");
  p1El.classList.add("item__text");
  p1El.innerHTML = element.text;

  const p2El = document.createElement("p");
  p2El.classList.add("item__price");
  p2El.innerHTML = element.price;

  divEl.appendChild(imgEl);
  divEl.appendChild(hoverButtonEl);
  hoverButtonEl.appendChild(textNode);
  figcaptionEl.appendChild(p1El);
  figcaptionEl.appendChild(p2El);

  figureEl.appendChild(divEl);
  figureEl.appendChild(figcaptionEl);
  productsFeaturedEl.appendChild(figureEl);
  console.log(figureEl);
});

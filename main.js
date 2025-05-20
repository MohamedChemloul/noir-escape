let toggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");

toggleMenu.addEventListener("click", () => {
  links.classList.toggle("open");
});

const images = [
  { url: "images/image1.jpg", title: "VILLA RENTALS" },
  { url: "images/image2.jpg", title: "YACHT CHARTER" },
  { url: "images/image3.jpg", title: "LUXURY SERVICES" },
  { url: "images/image4.jpg", title: "EVENT MANAGEMENT" },
];

const gallery = document.querySelector(".gallery");

images.forEach((img) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url(${img.url})`;

  const name = document.createElement("div");
  name.className = "card-name";
  name.textContent = img.title;

  card.appendChild(name);
  gallery.appendChild(card);

  card.addEventListener("click", (e) => {
    let overlay = document.createElement("div");

    overlay.className = "img-overlay";
    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    let popupImg = document.createElement("img");

    popupImg.src = img.url;

    let esc = document.createElement("span");
    esc.className = "close";
    esc.innerHTML = "X";

    document.body.appendChild(popupBox);
    popupBox.appendChild(popupImg);
    popupBox.appendChild(esc);

    esc.addEventListener("click", () => {
      overlay.remove();
      popupBox.remove();
    });
  });
});

/* IMAGE MODAL SLIDER */
// Make img big onclick
document.querySelector(".fullscreen-video").addEventListener("click", () => {
  document.querySelector(".video-modal").style.display = "block";
  document.body.style.overflowY = "hidden";
});

document.querySelector(".fullscreen-faq").addEventListener("click", () => {
  document.querySelector(".faq-modal").style.display = "block";
  document.body.style.overflowY = "hidden";
});

// MODALS start
document
  .querySelector(".video-modal .modal .close")
  .addEventListener("click", () => {
    document.querySelector(".video-modal").style.display = "none";
    document.body.style.overflowY = "scroll";
    document.querySelector(".hero-video").pause();
  });

document
  .querySelector(".faq-modal .modal .close")
  .addEventListener("click", () => {
    document.querySelector(".faq-modal").style.display = "none";
    document.body.style.overflowY = "scroll";
  });

window.onkeydown = (event) => {
  // console.log(event.code);
  if (event.code == "Escape") {
    document.querySelector(".video-modal .modal .close").click();
    document.querySelector(".faq-modal .modal .close").click();
  }
};
// MODALS end

const loofys = document.getElementsByClassName("redirect-loofys");
const linksArr = [
  "https://loofys.nl/blogs/wat-is-vegan-shampoo/",
  "https://loofys.nl/blogs/wat-doet-shampoo-met-je-haar/",
  "https://loofys.nl/blogs/3-tips-bij-het-kopen-van-shampoo/",
  "https://loofys.nl/blogs/alles-is-natuurlijk/",
];

// Loofys loop that gives us the index of the clicked element
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("redirect-loofys")) {
    for (var i = 0, l = loofys.length; i < l; i++) {
      loofys[i].index = i;
      let numm = e.target.index;
      if (numm >= 0) {
        window.open(
          linksArr[numm],
          "center window",
          "width=" +
            1080 +
            ", height=" +
            1080 +
            ", top=" +
            (screen.height - 1080) / 2 +
            ", left=" +
            (screen.width - 1080) / 2
        );
        return;
      }

      // code
    }
  }
});

// Loofys
const toggleButton = document.querySelector(".toggle-button");

// <!-- Floating Action Buttons -->
function actionToggle() {
  document.querySelector(".action").classList.toggle("open-close");
}

function hamburgerToggle() {
  toggleButton.classList.toggle("open-close");
  setTimeout(() => {
    toggleButton.classList.toggle("open-close");
  }, 400);
}

// HamburgerToggle
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("openMenu");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("openMenu");
  toggleButton.classList.toggle("open-close");
  setTimeout(() => {
    toggleButton.classList.toggle("open-close");
  }, 400);
});

// ShowPoster
const posterLabel = document.querySelector(".poster-label");
const poster = document.querySelector(".poster");
const posterImage = document.querySelector(".poster .poster-image");

posterLabel.addEventListener("click", () => {
  poster.classList.toggle("openPoster");
});

posterImage.addEventListener("click", () => {
  posterLabel.click();
  document.querySelector(".poster-modal").style.display = "block";
  document.body.style.overflowY = "hidden";
});

document.querySelector(".poster-modal .close").addEventListener("click", () => {
  document.querySelector(".poster-modal").style.display = "none";
  document.body.style.overflowY = "scroll";
});

posterImage.addEventListener("mouseover", (e) => {});
document.body.addEventListener("mouseover", (e) => {
  if (e.target.classList == "poster-image") {
    console.log(true);
    poster.classList.add("displayPosterText");
  } else {
    console.log(false);
    poster.classList.remove("displayPosterText");
  }
});

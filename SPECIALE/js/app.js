/* ==========================================
   PAGE NAVIGATION SYSTEM
========================================== */

const pages = document.querySelectorAll(".page");
let currentPage = "home";
let pageHistory = [];

function showPage(pageID, addHistory = true) {
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(pageID);

  if (targetPage) {
    targetPage.classList.add("active");
  }

  if (addHistory && currentPage !== pageID) {
    pageHistory.push(currentPage);
  }

  currentPage = pageID;

  if (pageID === "moments") {
    if (music && !musicPlaying) {
      music
        .play()
        .then(() => {
          musicBtn.innerHTML = "⏸";
          musicPlaying = true;
        })
        .catch(() => {
          console.log("Autoplay blocked");
        });
    }
  }

  updateBackButton();
}

/* ==========================================
   ENTER BUTTON
========================================== */

const enterButton = document.querySelector(".enter-button");

if (enterButton) {
  enterButton.addEventListener("click", () => {
    showPage("menu");
  });
}

/* ==========================================
   MENU CARDS
========================================== */

const cards = document.querySelectorAll(".menu-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const page = card.dataset.page;

    showPage(page);
  });
});

/* ==========================================
   BACK BUTTON
========================================== */

const backButton = document.getElementById("backButton");

function updateBackButton() {
  if (!backButton) return;

  if (currentPage === "home") {
    backButton.classList.remove("visible");
  } else {
    backButton.classList.add("visible");
  }
}

if (backButton) {
  backButton.addEventListener("click", () => {
    if (pageHistory.length > 0) {
      const previous = pageHistory.pop();

      showPage(previous, false);
    }
  });
}

/* ==========================================
   PAGE ANIMATION OBSERVER
========================================== */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

pages.forEach((page) => {
  observer.observe(page);
});

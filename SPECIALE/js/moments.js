/* ==========================================
   LITTLE MOMENTS
========================================== */

const momentItems = [
  { type: "image", src: "images/moment1.webp" },
  { type: "image", src: "images/moment2.webp" },
  { type: "image", src: "images/moment3.webp" },
  { type: "image", src: "images/moment4.webp" },
  { type: "image", src: "images/moment5.webp" },
  { type: "image", src: "images/moment6.webp" },
  { type: "image", src: "images/moment7.webp" },
  { type: "image", src: "images/moment8.webp" },
  { type: "image", src: "images/moment9.webp" },
  { type: "image", src: "images/moment10.webp" },
  { type: "image", src: "images/moment11.webp" },

  { type: "video", src: "videos/moment-video1.mp4" },
  { type: "video", src: "videos/moment-video2.mp4" },
  { type: "video", src: "videos/moment-video3.mp4" },
];

const momentsSection = document.getElementById("moments");

if (momentsSection) {
  momentsSection.innerHTML = `

    <div class="page-content">

        <h2 class="page-title">

            Little Moments

        </h2>

        <p class="page-subtitle">

            Tiny memories that still make me smile.

        </p>

        <div class="moments-wall">

            ${momentItems
              .map((item, index) => {
                if (item.type === "image") {
                  return `

                  <div class="moment-card"
                  style="
                  --delay:${index};
                 --rotation:0deg;
                  ">

                        <img
                            src="${item.src}"
                            alt="Memory ${index + 1}"
                            loading="lazy">

                    </div>

                    `;
                }

                return `

                <div class="moment-card"

                style="--delay:${index}; --rotation:0deg;">

                    <video
                        autoplay
                        muted
                        loop
                        playsinline
                        preload="none">

                        <source
                            src="${item.src}"
                            type="video/mp4">

                    </video>

                </div>

                `;
              })
              .join("")}

        </div>

    </div>

    `;
}

/* ==========================================
   MEMORY COLUMN LOOP
========================================== */

const wall = document.querySelector(".moments-wall");

if (wall) {
  const cards = [...wall.querySelectorAll(".moment-card")];

  /* ==========================================
       MOBILE MODE
    ========================================== */

  if (window.innerWidth <= 768) {
    cards.forEach((card) => {
      card.style.position = "relative";

      card.style.left = "auto";

      card.style.top = "auto";

      card.style.transform = "none";
    });

    wall.style.height = "auto";
  } else {
    const columns = [
      [0, 4, 8, 12], // column 1
      [1, 5, 9, 13], // column 2
      [2, 6, 10], // column 3
      [3, 7, 11], // column 4
    ];

    const CARD_HEIGHT = 300;
    const START_X = 70;
    const COLUMN_GAP = 270;
    const START_Y = 60;

    columns.forEach((indexes, columnIndex) => {
      const direction =
        columnIndex === 0 || columnIndex === 2
          ? -1 // columns 1 & 3 move UP
          : 1; // columns 2 & 4 move DOWN

      const columnCards = indexes.map((i) => cards[i]).filter(Boolean);

      // Initial positions
      columnCards.forEach((card, row) => {
        card.style.position = "absolute";

        card.style.left = `${START_X + columnIndex * COLUMN_GAP}px`;

        card.style.top = `${START_Y + row * CARD_HEIGHT}px`;
      });

      setInterval(() => {
        // Animate every card
        columnCards.forEach((card) => {
          const current = parseFloat(card.style.top);

          card.style.transition = "top 0.9s ease";

          card.style.top = `${current + direction * CARD_HEIGHT}px`;
        });

        // After animation finishes
        setTimeout(() => {
          if (direction === -1) {
            // UP

            const first = columnCards.shift();

            first.style.transition = "none";

            first.style.top = `${START_Y + columnCards.length * CARD_HEIGHT}px`;

            columnCards.push(first);
          } else {
            // DOWN

            const last = columnCards.pop();

            last.style.transition = "none";

            last.style.top = `${START_Y - CARD_HEIGHT}px`;

            columnCards.unshift(last);
          }
        }, 900);
      }, 2500);
    });
  }
}

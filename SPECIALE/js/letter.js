/* ==========================================
   LOVE LETTER
========================================== */

const paragraphs = [
  "You came into my life when I least expected it.",

  "And somehow everything became brighter.",

  "You make ordinary days feel extraordinary.",

  "You make me smile without even trying.",

  "Thank you for believing in me.",

  "Thank you for every laugh.",

  "Thank you for every memory.",

  "And thank you for simply being you.",

  "I love you more than words could ever explain. ❤️",
];

const letter = document.getElementById("letter");

if (letter) {
  letter.innerHTML = `

<div class="page-content">

<h2 class="page-title">

A Letter For You

</h2>

<div class="letter-container">

${paragraphs
  .map(
    (text) => `

<p class="letter-line">

${text}

</p>

`,
  )
  .join("")}

</div>

</div>

`;
}

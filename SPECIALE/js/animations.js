/* ==========================================
   RELATIONSHIP COUNTER
========================================== */

const counter = document.getElementById("love-counter");

function updateCounter() {
  if (!counter) return;

  const now = new Date();

  const diff = now - relationshipDate;

  const days = Math.floor(diff / 86400000);

  const hours = Math.floor((diff % 86400000) / 3600000);

  const minutes = Math.floor((diff % 3600000) / 60000);

  const seconds = Math.floor((diff % 60000) / 1000);

  counter.innerHTML = `${days} Days<br>
     ${hours} Hours<br>
     ${minutes} Minutes<br>
     ${seconds} Seconds`;
}

updateCounter();

setInterval(updateCounter, 1000);

/* ==========================================
   QUOTES
========================================== */

const quote = document.getElementById("quote");

let current = 0;

function nextQuote() {
  if (!quote) return;

  quote.style.opacity = 0;

  setTimeout(() => {
    quote.innerHTML = quotes[current];

    quote.style.opacity = 1;

    current++;

    if (current >= quotes.length) {
      current = 0;
    }
  }, 400);
}

nextQuote();

setInterval(nextQuote, 5000);

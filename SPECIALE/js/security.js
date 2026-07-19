/* ==========================================
   PASSWORD PROTECTION
========================================== */

let attempts = 0;
let lockedUntil = 0;

const PASSWORD_HASH =
  "d7e04faf4d7accb95503cc40dfbc1b263124151719152c8a5e3e46759b94bf9f";

async function sha256(text) {
  const data = new TextEncoder().encode(text);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/* ==========================================
   ELEMENTS
========================================== */

const screen = document.getElementById("security-screen");

const input = document.getElementById("passwordInput");

const unlock = document.getElementById("unlockButton");

const toggle = document.getElementById("togglePassword");

const message = document.getElementById("securityMessage");

/* ==========================================
   SHOW PASSWORD
========================================== */

toggle.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";

    toggle.textContent = "🙈";
  } else {
    input.type = "password";

    toggle.textContent = "👁";
  }
});

/* ==========================================
   UNLOCK
========================================== */

async function unlockSite() {
  if (Date.now() < lockedUntil) {
    message.textContent = "Too many attempts. Try again later.";

    return;
  }

  const hash = await sha256(input.value);

  if (hash === PASSWORD_HASH) {
    document.body.classList.remove("locked");

    document.body.style.overflow = "auto";

    screen.style.opacity = "0";

    screen.style.pointerEvents = "none";

    setTimeout(() => {
      screen.remove();
    }, 500);
  } else {
    attempts++;

    if (attempts >= 5) {
      lockedUntil = Date.now() + 30000;

      attempts = 0;
    }

    message.textContent = "Incorrect password.";

    input.value = "";

    input.focus();

    document.querySelector(".security-card").classList.add("shake");

    setTimeout(() => {
      document.querySelector(".security-card").classList.remove("shake");
    }, 500);
  }
}

unlock.addEventListener("click", unlockSite);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    unlockSite();
  }
});

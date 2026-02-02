const hasGSAP = typeof window.gsap !== "undefined";
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const form = document.getElementById("signupForm");
const successMsg = document.querySelector(".success");
const btn = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  clearErrors();
  successMsg.textContent = "";

  let valid = true;

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError("email", "Enter a valid email");
    valid = false;
  }
  if (password.length < 6) {
    showError("password", "Minimum 6 characters");
    valid = false;
  }

  if (!valid) return;
  fakeSubmit();
});

function showError(id, msg) {
  const field = document.getElementById(id).parentElement;
  field.querySelector(".error").textContent = msg;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

function fakeSubmit() {
  btn.classList.add("loading");
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.remove("loading");

    successMsg.textContent = "Signed in successfully !";

    if (hasGSAP && !prefersReducedMotion) {
      gsap.fromTo(
        successMsg,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
    } else {
      successMsg.style.opacity = "1";
    }

    lockForm();
  }, 1500);
}

function lockForm() {
  form.querySelectorAll("input, button").forEach(el => el.disabled = true);
}

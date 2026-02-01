const toggleBtn = document.querySelector(".navbar__toggle");
const mobileMenu = document.querySelector(".navbar__info");

let menuOpen = false;

const menuTimeline = gsap.timeline({
  paused: true,
  defaults: { duration: 0.3, ease: "power2.out" }
});

menuTimeline.to(mobileMenu, {
  opacity: 1,
  y: 10,
  pointerEvents: "auto"
});

toggleBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;

  toggleBtn.setAttribute("aria-expanded", menuOpen);

  if (menuOpen) {
    menuTimeline.play();
  } else {
    menuTimeline.reverse();
  }
});

gsap.from(
  [".hero__title", ".hero__subtitle", ".hero__actions"],
  {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.3
  }
);

// feature section
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".pub-card", {
//   scrollTrigger: {
//     trigger: ".publications",
//     start: "top 70%",
//   },
//   opacity: 0,
//   y: 60,
//   duration: 0.9,
//   stagger: 0.2,
//   ease: "power3.out",
// });

document.querySelectorAll(".pub-card").forEach((card) => {
  const image = card.querySelector("img");
  const overlay = card;
  const arrow = card.querySelector(".pub-card__arrow");

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.inOut" },
  });

  tl.to(card, {
    rotationY: 360,
    duration: 1.8,
  })
    .to(
      image,
      {
        scale: 1.1,
        duration: 0.6,
      },
      0
    )
    .to(
      card,
      {
        boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
        duration: 0.4,
      },
      0
    )
    .to(
      card,
      {
        "--overlay-opacity": 1,
        duration: 0.3,
      },
      0.3
    )
    .to(
      arrow,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      },
      0.5
    );

  card.addEventListener("mouseenter", () => tl.play());
  card.addEventListener("mouseleave", () => tl.reverse());
});


// pricing cards  

const toggleButtons = document.querySelectorAll(".toggle-btn");
const priceSpans = document.querySelectorAll(".price span");

// Load saved preference
const savedPlan = localStorage.getItem("pricingPlan") || "monthly";
setPricing(savedPlan, false);

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.dataset.plan;
    setPricing(plan, true);
  });
});

function setPricing(plan, animate = true) {
  toggleButtons.forEach((btn) => {
    const isActive = btn.dataset.plan === plan;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive);
  });

  priceSpans.forEach((span) => {
    const newPrice = span.dataset[plan];

    if (animate) {
      gsap.fromTo(
        span,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          onStart: () => (span.textContent = newPrice),
        }
      );
    } else {
      span.textContent = newPrice;
    }
  });

  localStorage.setItem("pricingPlan", plan);
}




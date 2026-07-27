/*
 * About page hero motion: staggered entrance + scroll reveals.
 * Respects prefers-reduced-motion. Only runs when .about-page is present.
 */

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function markVisible(element) {
  element.classList.add("is-visible");
}

function runHeroEntrance(page) {
  const items = page.querySelectorAll("[data-about-enter]");
  items.forEach(function (element, index) {
    element.style.transitionDelay = index * 90 + "ms";
  });

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      items.forEach(markVisible);
    });
  });
}

function prepareBioReveals(page) {
  const bio = page.querySelector(".about-bio");
  if (!bio) {
    return;
  }

  Array.prototype.forEach.call(bio.children, function (child) {
    if (!child.hasAttribute("data-about-reveal")) {
      child.setAttribute("data-about-reveal", "");
    }
  });
}

function runScrollReveals(page) {
  const items = page.querySelectorAll("[data-about-reveal]");
  if (!items.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach(markVisible);
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        markVisible(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  items.forEach(function (element) {
    observer.observe(element);
  });
}

function initAboutHero() {
  const page = document.querySelector(".about-page");
  if (!page) {
    return;
  }

  if (prefersReducedMotion()) {
    return;
  }

  prepareBioReveals(page);
  page.classList.add("about-page--enhanced");
  runHeroEntrance(page);
  runScrollReveals(page);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAboutHero);
} else {
  initAboutHero();
}

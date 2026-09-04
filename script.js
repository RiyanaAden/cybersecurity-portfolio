// Reveal sections as the user scrolls

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});


// Highlight navigation link for the section currently being viewed

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 250) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});


// Small mouse glow effect

document.addEventListener("mousemove", (event) => {
  document.documentElement.style.setProperty(
    "--mouse-x",
    `${event.clientX}px`
  );

  document.documentElement.style.setProperty(
    "--mouse-y",
    `${event.clientY}px`
  );
});

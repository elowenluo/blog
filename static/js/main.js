document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle
  const menuToggler = document.querySelector(".header__toggler");
  const menu = document.querySelector(".header__menu");

  if (menuToggler && menu) {
    menuToggler.addEventListener("click", function () {
      // Toggle classes for hamburger animation and menu display
      menuToggler.classList.toggle("is-active");
      menu.classList.toggle("is-open");

      // Update ARIA attributes
      const isExpanded = menuToggler.getAttribute("aria-expanded") === "true";
      menuToggler.setAttribute("aria-expanded", !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInside =
        menu.contains(event.target) || menuToggler.contains(event.target);

      if (!isClickInside && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        menuToggler.classList.remove("is-active");
        menuToggler.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768 && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        menuToggler.classList.remove("is-active");
        menuToggler.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Back to top functionality
  const backToTopButton = document.getElementById("back-to-top-link");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

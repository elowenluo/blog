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

  // Add copy buttons to code blocks
  const codeBlocks = document.querySelectorAll("pre code");

  codeBlocks.forEach(codeBlock => {
    // Get the parent pre element
    const preElement = codeBlock.parentElement;

    // Create a container for the code block if it doesn't already have one
    let codeContainer = preElement.parentElement;
    if (!codeContainer.classList.contains("code-container")) {
      codeContainer = document.createElement("div");
      codeContainer.className = "code-container";
      preElement.parentNode.insertBefore(codeContainer, preElement);
      codeContainer.appendChild(preElement);
    }

    // Create copy button
    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.textContent = "Copy";

    // Add click event listener
    copyButton.addEventListener("click", () => {
      // Get the text content
      const code = codeBlock.textContent;

      // Copy to clipboard
      navigator.clipboard
        .writeText(code)
        .then(() => {
          // Visual feedback
          copyButton.textContent = "Copied!";
          copyButton.classList.add("copied");

          // Reset after 2 seconds
          setTimeout(() => {
            copyButton.textContent = "Copy";
            copyButton.classList.remove("copied");
          }, 2000);
        })
        .catch(error => {
          console.error("Failed to copy code: ", error);
          copyButton.textContent = "Error";

          // Reset after 2 seconds
          setTimeout(() => {
            copyButton.textContent = "Copy";
          }, 2000);
        });
    });

    // Add the button to the code container
    codeContainer.appendChild(copyButton);
  });
});

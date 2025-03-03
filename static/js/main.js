document.addEventListener("DOMContentLoaded", function () {
  // Add copy functionality to all copy buttons
  document.querySelectorAll(".copy-button").forEach(button => {
    button.addEventListener("click", function () {
      // Find the code element within the parent container
      const codeContainer = this.parentElement;
      const codeElement = codeContainer.querySelector("code");
      const codeText = codeElement.textContent;

      // Copy to clipboard
      navigator.clipboard
        .writeText(codeText)
        .then(() => {
          // Visual feedback
          this.textContent = "Copied!";
          this.classList.add("copied");

          // Reset after 2 seconds
          setTimeout(() => {
            this.textContent = "Copy";
            this.classList.remove("copied");
          }, 2000);
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
    });
  });

  // Reading progress indicator
  if (document.getElementById("readingProgress")) {
    function updateReadingProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      document.getElementById("readingProgress").style.width = `${progress}%`;
    }

    window.addEventListener("scroll", updateReadingProgress);
    updateReadingProgress(); // Initialize on page load
  }
});

// JavaScript for "Back to Top" button
document.addEventListener("DOMContentLoaded", function () {
  // Back to top functionality
  const backToTopButton = document.getElementById("back-to-top-link");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

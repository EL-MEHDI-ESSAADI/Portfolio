(() => {
   const scrollFadeInTopElements = document.querySelectorAll(".fadeInScrollElement");

   scrollFadeInTopElements.forEach((el) => {
      window.addEventListener("scroll", handelScroll);
      // in case if the element already shown
      handelScroll();

      function handelScroll() {
         if (window.scrollY + window.innerHeight < el.offsetTop + 70) return;
         el.style.animationDelay = el.dataset.fadeDelay || "0s";
         el.classList.add("fade");
         window.removeEventListener("scroll", handelScroll);
      }
   });
})();

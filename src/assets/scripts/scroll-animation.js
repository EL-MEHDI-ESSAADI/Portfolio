(() => {
   const scrollFadeInTopElements = document.querySelectorAll(".fadeInScrollElement");

   scrollFadeInTopElements.forEach((el) => {
      window.addEventListener("scroll", handelScroll);
      // in case if the element already shown
      handelScroll();

      function handelScroll() {
         if (window.scrollY + window.innerHeight < el.offsetTop + 70) return;
         el.style.animation = `fadeInTop 0.6s ${el.dataset.fadeDelay || "0s"} ease-out both`;
         window.removeEventListener("scroll", handelScroll);
      }
   });
})();

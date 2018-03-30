"use strict";
//Logo appearence
(function() {
  const logo = document.getElementById("logo-container");
  const test = document.getElementById("test");

  const options = {
    root: null,
    rootmargin: "0",
    threshhold: 1.0
  };

  const logoEntry = function(entries, observer) {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting == true) {
        logo.style.display = "list-item";
        logo.classList.add("logo-appearance");
        entry.target.style.backgroundColor = "green";
      }
    });
  };

  const observer = new IntersectionObserver(logoEntry, options);

  observer.observe(test);

  console.log(observer);
})();

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

//Load more projects
document.getElementById("btn-loader").onclick = function() {
  const items = document.querySelectorAll(".item");
  const button = document.getElementById("btn-loader");
  console.log(items);

  //Counter for the items
  let counter = 0;

  //Check if all the elements are active
  let checkIfAllActive = Array.from(items).every(item => {
    return item.classList.contains("active");
  });

  console.log(checkIfAllActive);

  for (let item of items) {
    if (!item.classList.contains("active")) {
      counter++;
      item.classList.add("active");
    } else if (checkIfAllActive) {
      button.innerHTML = "test";
      return;
    }

    if (counter == 3) {
      counter = 0;
      break;
    }
  }
};

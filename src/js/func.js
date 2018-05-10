"use strict";
//Logo Appearance
function logoAppearing() {
  //getBoundingClientRect()
  const logo = document.getElementById('logo-container');
  const workHeading = document.querySelector('.work-heading h1');

  //Returns the number of pixels that the document is currently scrolled vertically 
  const scrollY = window.scrollY;
  
  //Returns the size of an element and its position relative to the viewport.
  const elTop = workHeading.getBoundingClientRect().top;
  
  if(scrollY > elTop) {
    logo.style.display = "list-item";
    logo.classList.add("logo-appearance");
  }
}

window.addEventListener('scroll', logoAppearing);

//Load more projects
const loadMoreBtn = document.getElementById('btn-loader');

function loadMore() {
  const items = document.querySelectorAll(".item");
  const button = document.getElementById("btn-loader");
  console.log(items);

  //Counter for the items
  let counter = 0;

  //Check if all the elements are active
  const checkIfAllActive = Array.from(items).every(item => {
    return item.classList.contains("active");
  });

  console.log(checkIfAllActive);

  for (let item of items) {
    if (!item.classList.contains("active")) {
      counter++;
      item.classList.add("active");
    } else if (checkIfAllActive) {
      button.innerHTML = "That's all";
      return;
    }

    if (counter == 3) {
      counter = 0;
      break;
    }
  }
}

loadMoreBtn.addEventListener('click', loadMore);


//To add the checkIfAllActive outside

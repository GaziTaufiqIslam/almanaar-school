
const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });
  };
};

//function to add scroll so we can use in css
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

//Listen for scroll events if any
document.addEventListener("scroll", debounce(storeScroll));

//update scroll the first tiem
storeScroll();

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const menuNav = document.querySelector(".menu-nav");

hamburger.addEventListener("click", function(){
  if(nav.classList.contains("menu-open")){
    nav.classList.remove("menu-open");
    menuNav.classList.remove('fade-in')
  } else{
    nav.classList.add("menu-open");
    menuNav.classList.add('fade-in')
  }
});

const gridSwitcher = document.querySelector(".grid-switcher");
const layoutGrid = document.querySelector(".layout-grid");
const viewLayoutGrid = () => {
  if(layoutGrid.classList.contains("view-grid")){
    layoutGrid.classList.remove("view-grid");
  } else {
    layoutGrid.classList.add("view-grid");
  }
}

gridSwitcher.addEventListener("click", viewLayoutGrid );
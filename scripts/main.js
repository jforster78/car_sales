"user strict";

//Primary and Secondary Menu Toggles
const menuToggles = (() => {
  //Main menu
  const primaryToggle = () => {
    const navs = document.querySelectorAll(".primary-nav__link");
    //Toggles menu open/closed
    navs.forEach(nav => nav.classList.toggle("primary-nav__toggleShow"));
  };
  const primaryToggleEventListener = document.querySelector(".primary-nav__toggle");
  primaryToggleEventListener.addEventListener("click", () => {
    primaryToggle();
  });
  //Secondary menu
  const secondaryToggle = () => {
    const navs = document.querySelectorAll(".secondary-nav__link");
    //Toggles menu open/closed
    navs.forEach(nav => nav.classList.toggle("secondary-nav__toggleShow"));
  };
  const secondaryToggleEventListener = document.querySelector(".secondary-nav__toggle");
  secondaryToggleEventListener.addEventListener("click", () => {
    secondaryToggle();
  });
})();

//Tabs and Tab Content
const tabs = (() => {
  //Specifications
  const specifications = () => {
    const activeTabs = document.querySelectorAll(".active");
    //Deactivates the current active tab
    for (let i = 0; i < activeTabs.length; i++) {
      activeTabs[i].className = activeTabs[i].className.replace("active", "");
    }
  };
  const specificationsEventListener = document.getElementById("js-tab");
  specificationsEventListener.addEventListener("click", event => {
    specifications();
    event.target.className += " active";
    document.getElementById(event.target.href.split("#")[1]).className += " active";
    event.preventDefault();
  });
  //Colour swatches
  const swatchColours = () => {
    const selectedSwatches = document.querySelectorAll(".is-selected");
    //Deactivates the current active tab
    for (let i = 0; i < selectedSwatches.length; i++) {
      selectedSwatches[i].className = selectedSwatches[i].className.replace("is-selected", "");
    }
  };
  const swatchColoursEventListener = document.querySelectorAll(".tab-pane__swatch-link");
  swatchColoursEventListener.forEach(swatchColour => {
    swatchColour.addEventListener("click", event => {
      swatchColours();
      event.target.className += " is-selected";
      document.getElementById(event.target.href.split("#")[1]).className += " is-selected";
      event.preventDefault();
    });
  });
})();

//SlideShow
const slideShow = (() => {
  const slides = document.getElementsByClassName("gallery__slides");
  let slideIndex = 0;
  //Timer
  const timer = () => {
    setInterval(() => {
      nextSlide();
    }, 10000); //10 seconds
  };
  //Next slide
  const nextSlide = () => {
    //Dispaly none of the slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex < slides.length
      ? (slideIndex = slideIndex + 1)
      : (slideIndex = 1);
    //Display the next slide
    slides[slideIndex - 1].style.display = "block";
  };
  const nextSlideEventListener = document.querySelector(".next");
  nextSlideEventListener.addEventListener("click", () => {
    nextSlide();
  });
  //Previous slide
  const prevSlide = () => {
    //Display none of the slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex < slides.length + 1 && slideIndex > 1
      ? (slideIndex = slideIndex - 1)
      : (slideIndex = slides.length);
    //Display the previous slide
    slides[slideIndex - 1].style.display = "block";
  };
  const prevSlideEventListener = document.querySelector(".prev");
  prevSlideEventListener.addEventListener("click", () => {
    prevSlide();
  });

  nextSlide(); //Display first slide
  timer(); //Start timer
})();

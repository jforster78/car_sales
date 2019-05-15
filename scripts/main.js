'user strict';

//Primary and Secondary Menu Toggles
const menuToggles = {
  primaryToggle() {
    const navs = document.querySelectorAll('.primary-nav__link');
    //Toggles menu open/closed       	
    navs.forEach(nav => nav.classList.toggle('primary-nav__toggleShow'));
  },
  primaryToggleEventListener: document.querySelector('.primary-nav__toggle').addEventListener('click', () => {
    menuToggles.primaryToggle();
  }),
  secondaryToggle() {
    const navs = document.querySelectorAll('.secondary-nav__link');
    //Toggles menu open/closed         	
    navs.forEach(nav => nav.classList.toggle('secondary-nav__toggleShow'));   
  }, 
  secondaryToggleEventListener: document.querySelector('.secondary-nav__toggle').addEventListener('click', () => {
    menuToggles.secondaryToggle();
  })
};


//Tabs and Tab Content
const tabs = {
  specifications() {
    const activeTabs = document.querySelectorAll('.active');                   
    //Deactivates the current active tab
    for(let i = 0; i < activeTabs.length; i++) {                            
      activeTabs[i].className = activeTabs[i].className.replace('active', '');
    }
  },
  specificationsEventListener: document.getElementById('js-tab').addEventListener('click', event => {
    tabs.specifications();
    event.target.className += ' active'; 
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
    event.preventDefault();	
  }),
  swatchColours() {
    const selectedSwatches = document.querySelectorAll('.is-selected');                   
    //Deactivates the current active tab
    for(let i = 0; i < selectedSwatches.length; i++) {                            
      selectedSwatches[i].className = selectedSwatches[i].className.replace('is-selected', '');
    }
  },
  swatchColoursEventListener: document.querySelectorAll('.tab-pane__swatch-link').forEach(swatchColour => {
    swatchColour.addEventListener('click', event => {
    tabs.swatchColours();	
    event.target.className += ' is-selected'; 
    document.getElementById(event.target.href.split('#')[1]).className += ' is-selected'; 
    event.preventDefault();
    });
  })
};

  
//SlideShow
const slideShow = {
  slides: document.getElementsByClassName('gallery__slides'),
  slideIndex: 0,	
  timer() {
    setInterval(() => {
      slideShow.nextSlide();
    }, 10000);  //10 seconds
  },
  nextSlide() {
    //Dispaly none of the slides
    for(let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
 
    this.slideIndex < this.slides.length ? this.slideIndex = this.slideIndex + 1 : this.slideIndex = 1;
    //Display the next slide
    this.slides[this.slideIndex -1].style.display = 'block';
  },
  nextSlideEventListener: document.querySelector('.next').addEventListener('click', () => {
    slideShow.nextSlide();
  }),
  prevSlide() {
    //Display none of the slides
    for(let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
    
    this.slideIndex < this.slides.length + 1 && this.slideIndex > 1 ? this.slideIndex = this.slideIndex - 1 : this.slideIndex = this.slides.length;
    //Display the previous slide
    this.slides[this.slideIndex -1].style.display = 'block';
  },
  prevSlideEventListener: document.querySelector('.prev').addEventListener('click', () => {
    slideShow.prevSlide();
  })
};

//Display first slide
slideShow.nextSlide();
//Start timer
slideShow.timer();
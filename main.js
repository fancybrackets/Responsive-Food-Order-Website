
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");


menu.onclick = () =>{

    
menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');

}


document.querySelector('#search-icon').onclick= () => {
document.querySelector('#search-form').classList.toggle('active')
};

document.querySelector("#close").onclick = function() {
    document.querySelector("#search-form").classList.remove("active") ; 
}



    window.addEventListener("scroll" , function() {
        menu.classList.remove('fa-times'); 
        navbar.classList.remove('active');
    }  )


  function swiper() {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    
 var swiper = new Swiper(".review-slider", {
  
      spaceBetween: 20,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        
        disableOnInteraction: false
      },
      breakpoints: {
        
        0: {
          
          
          slidesPerView: 1,
        
        },

        640: {
          slidesPerView: 2,
  
        },
        
        
        768: {
          slidesPerView: 2,
  
        },
        
        1024: {
          slidesPerView: 3,
     
        }
      }

    });
    
  }


  

  

  function paint() {

  var section = document.querySelectorAll('section') ; 
  var navLinks = document.querySelectorAll("header .navbar a");


  
      window.onscroll = () => { 

        
        
      

      section.forEach(section =>  {  
          let scrollTop = window.scrollY ; 
          let sectionHeight = section.offsetHeight ; 
          let sectionOffset = section.offsetTop - 150 ; 
      
          if(scrollTop >= sectionOffset  && scrollTop < sectionOffset + sectionHeight) {  
    
            let id = section.getAttribute("id") ; 
              navLinks.forEach(links => {
              links.classList.remove("active") ; 
              document.querySelector('header .navbar a[href*='+id+']').classList.add('active') ; 

              }) ;
          } } )  ;

      } ; 
  }

  function loaderOut() {
    window.onload = () => {
     setTimeout(function() {

      document.querySelector(".loader-container").classList.add("loaderOut") ; 
    },"1000");
    }
  }


  paint() ; 
  swiper() ;
  loaderOut() ;
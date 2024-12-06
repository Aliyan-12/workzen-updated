(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

// snow animation

function createSnowflakes(container, num) {
    for (let i = 0; i < num; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
  
      // Set random size
      const size = Math.random() * 20 + 10; // size between 10px to 30px
      snowflake.style.fontSize = `${size}px`;
  
      // Set random position
      const leftPosition = Math.random() * 100; // random horizontal position
      snowflake.style.left = `${leftPosition}vw`;
  
      // Set random animation duration
      const speed = Math.random() * 10 + 5; // speed between 5s to 15s
      snowflake.style.animationDuration = `${speed}s`;
  
      // Set random horizontal movement
      const horizontalMovement = (Math.random() - 0.5) * 50; // random horizontal movement
      snowflake.style.transform = `translateX(${horizontalMovement}px)`;
  
      // Set the snowflake character
      snowflake.innerHTML = '&#10052;';
  
      // Set random color for the snowflake
      snowflake.style.color = `hsl(${Math.random() * 360}, 100%, 100%)`; // Random color in HSL range
  
      container.appendChild(snowflake);
  
      // Remove snowflakes after it falls
      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
      });
    }
  }
  
  function initializeSnowEffect() {
    const snowContainers = document.querySelectorAll('.snow-container');
    snowContainers.forEach(container => {
      const amountSnow = 20; // initial snow amount
      createSnowflakes(container, amountSnow);
  
      // Create new snowflakes periodically
      setInterval(() => {
        createSnowflakes(container, 1);
      }, 2000);
    });
  }
  
  // Initialize the snow effect when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initializeSnowEffect);
  



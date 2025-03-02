(function ($) { 'use strict';


  $('.main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping:true,
        autoplaySpeed: 6000
      });

 // Portfolio Popp Up
  $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

// Menu scrollspy
    $('body').scrollspy({ target: '#navbarmain' });


$(window).scroll(function() {

    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $('.site-header');

    if (st > 10) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');  
      }
    } 
    if (st < 20) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 40 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake'); 
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
    }

  }); 


    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.smoth-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1000);
        e.preventDefault();
    });

$(document).ready(function () {

// data - background
	// $('[data-background]').each(function () {
	// 	$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
	// });

/* ==========================================================================
      COUNTER UP 
 ========================================================================== */

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	

   /* Closes the Responsive Menu on Menu Item Click*/
    $('.navbar-collapse .navbar-nav li a').on('click', function () {
        $('.navbar-toggler:visible').click();
    });
    /*END MENU JS*/



	// Init Magnific Popup
	$('.portfolio-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		navigateByImgClick: true,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});


});



  
    $(window).on ('load', function (){ // makes sure the whole site is loaded

          // ----------------------- 
        // Progress Bar--------------------
        // 
    $('.progress-bar').each(function(){
            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });


    });  //End On Load Function

	
 // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

})(jQuery);

// document.addEventListener('DOMContentLoaded', function() {
//   const themeToggleBtn = document.getElementById('theme-toggle-btn');
//   const body = document.body;

//   themeToggleBtn.addEventListener('click', function() {
//       body.classList.toggle('dark-theme');
//       body.classList.toggle('light-theme');

//       // Save the current theme to localStorage
//       if (body.classList.contains('dark-theme')) {
//           localStorage.setItem('theme', 'dark');
//       } else {
//           localStorage.setItem('theme', 'light');
//       }
//   });

//   // Load the saved theme from localStorage
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme) {
//       body.classList.add(savedTheme + '-theme');
//   } else {
//       body.classList.add('light-theme'); // Default to light theme
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  themeToggleBtn.addEventListener('click', function() {
      body.classList.toggle('dark-theme');
      body.classList.toggle('light-theme');

      // Toggle the icon
      if (body.classList.contains('dark-theme')) {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
          localStorage.setItem('theme', 'dark');
      } else {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
          localStorage.setItem('theme', 'light');
      }
  });

  // Load the saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.classList.add(savedTheme + '-theme');
      if (savedTheme === 'dark') {
          themeIcon.classList.add('fa-moon');
      } else {
          themeIcon.classList.add('fa-sun');
      }
  } else {
      body.classList.add('light-theme'); // Default to light theme
      themeIcon.classList.add('fa-sun');
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const togglerIcon = navbarToggler.querySelector('.navbar-toggler-icon i');

    navbarToggler.addEventListener('click', function() {
        if (togglerIcon.classList.contains('fa-bars')) {
            togglerIcon.classList.remove('fa-bars');
            togglerIcon.classList.add('fa-times');
        } else {
            togglerIcon.classList.remove('fa-times');
            togglerIcon.classList.add('fa-bars');
        }
    });
});
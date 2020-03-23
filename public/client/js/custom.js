(function ($) {
  "use strict"
  let blog = {};


  blog.WebLoad = function () {
    document.getElementById("loading").style.display = "none";
  }


  blog.HeaderSticky = function () {
    $(".navbar-toggler").on("click", function (a) {
      a.preventDefault(); 
      $(".navbar").addClass("fixed-header");
    });
  }


  blog.MenuClose = function () {
    $('.navbar-nav .nav-link').on('click', function () {
      let toggle = $('.navbar-toggler').is(':visible');
      if (toggle) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  }


  blog.HeaderScroll = function () {
    $('a[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        let target = $(this.hash);
        console.log(target);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 65,
          }, 600);
          return false;
        }
      }
    });
  }


  blog.HeaderFixed = function () {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
      $('.navbar').addClass('fixed-header');
    } else {
      $('.navbar').removeClass('fixed-header');
    }
  }

  blog.ProgressBar = function () {
    $(".progress .progress-bar").each(function () {
      let bottom_object = $(this).offset().top + $(this).outerHeight();
      let bottom_window = $(window).scrollTop() + $(window).height();
      let progressWidth = $(this).attr('aria-valuenow') + '%';
      if (bottom_window > bottom_object) {
        $(this).css({
          width: progressWidth
        });
      }
    });
  }


  var $pCO8iIXSvz = 0;
  blog.Counter = function () {
    let $oTop = $('.counter-box').offset().top - window.innerHeight;
    if ($pCO8iIXSvz == 0 && $(window).scrollTop() > $oTop) {
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      $pCO8iIXSvz = 1;
    }
  }

  /*--------------------
  * Isotope
  ----------------------*/
  blog.MasoNry = function () {
    let portfolioWork = $('.portfolio-content');
    $(portfolioWork).isotope({
      resizable: false,
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
      filter: '*'
    });
    //Filtering items on portfolio.html
    let portfolioFilter = $('.filter li');
    // filter items on button click
    $(portfolioFilter).on('click', function () {
      let filterValue = $(this).attr('data-filter');
      portfolioWork.isotope({
        filter: filterValue
      });
    });
    //Add/remove class on filter list
    $(portfolioFilter).on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }

  /*--------------------
  * owl Slider
  ----------------------*/
  blog.BlogSlider = function () {
    let testimonials_slider = $('#blog-slider-single');
    testimonials_slider.owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        991: {
          items: 3
        },
        1140: {
          items: 3
        }
      }
    });
  }

  blog.ClientSlider = function () {
    let testimonials_slider = $('#client-slider-single');
    testimonials_slider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        991: {
          items: 3
        },
        1140: {
          items: 3
        }
      }
    });
  }


  blog.PopupVideo = function () {
    $('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  blog.LightboxGallery = function () {
    $('.portfolio-content').magnificPopup({
      delegate: '.lightbox-gallery',
      type: 'image',
      tLoading: '#%curr%',
      mainClass: 'mfp-fade',
      fixedContentPos: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
    });
  }


  // Window on Load
  $(window).on("load", function () {
    blog.WebLoad();
  });

  $(document).on("ready", function () {
    blog.MasoNry(),
    blog.ClientSlider(),
    blog.MenuClose(),
    blog.BlogSlider(),
    blog.Counter(),
    blog.ProgressBar(),
    blog.HeaderScroll(),
    blog.PopupVideo(),
    blog.LightboxGallery(),
    blog.HeaderSticky(),
    blog.HeaderFixed();;
  });

  $(window).on("scroll", function () {
    blog.Counter(),
    blog.ProgressBar(),
    blog.HeaderFixed();
  });


})(jQuery);
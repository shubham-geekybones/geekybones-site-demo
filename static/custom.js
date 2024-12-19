$(document).ready(function() {
    // new WOW().init();
});

$(document).ready(function () {
    $(function(){
        $('.navbar-toggler').on("click", function () {
            $('.gb-header-wrapper.fixed').removeClass('fixed');
            $('.gb-header-wrapper.fixed-remove').removeClass('fixed-remove');
            $('body').addClass('scrollbar-hidden');

        });
        $('.cancel-btn-wrapper').on("click", function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= 52) {
                console.log("here")
                $('.gb-header-wrapper').addClass('fixed');
            } else {
                $('.gb-header-wrapper').addClass('fixed-remove');
            }

            $('body').removeClass('scrollbar-hidden');

        });
    });
})

$(window).scroll(function () {
    const arrowTop = $('.gb-arrow-up');
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const fixedSocialIcons = $('.fixed-social-menus-wrapper ');
    const fixedContactForm = $('.gb-fixed-contact-form-wrapper ');
    if (scrollTop >= windowHeight / 4) arrowTop.addClass('active').removeClass('in-active');
    else arrowTop.removeClass('active').addClass('in-active');

    if(scrollTop >= 52) {
        fixedSocialIcons.addClass('show').removeClass('hide');
        fixedContactForm.addClass('show').removeClass('hide');
    }
    else {
        fixedSocialIcons.removeClass('show').addClass('hide');
        fixedContactForm.removeClass('show').addClass('hide');
    }

});


$(window).scroll(function () {
    const sticky = $('.navbar-wrap-inner');
    const scrollTop = $(window).scrollTop();
    if (scrollTop >= 52) sticky.addClass('fixed'), sticky.removeClass('fixed-remove');
    else sticky.removeClass('fixed'), sticky.addClass('fixed-remove');
})


let a = 0;
$(window).scroll(function() {
    const section = $('.why-choose-us-col-left');
    if (section.length > 0) {
        const oTop = section.offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.total-number-counts').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    }
});

// $(window).on('scroll', function() {
//     if ($(window).scrollTop() >= $('.our-process-sec').offset().top + 150 - window.innerHeight) {
//         $('.our-process-sec .animation-wrapper .first-box').addClass('active');
//         $('.our-process-sec .animation-wrapper .second-box').addClass('active');
//         $('.our-process-sec .animation-wrapper .third-box').addClass('active');
//         $('.our-process-sec .animation-wrapper .forth-box').addClass('active');
//     } else {
//         $('.our-process-sec .animation-wrapper .first-box').removeClass('active');
//         $('.our-process-sec .animation-wrapper .second-box').removeClass('active');
//         $('.our-process-sec .animation-wrapper .third-box').removeClass('active');
//         $('.our-process-sec .animation-wrapper .forth-box').removeClass('active');
//     }
// });


/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

window.addEventListener('DOMContentLoaded', (event) => {
    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 1400
                    }
                },
                "color": {
                    "value": ["#ffffff", "#FF4030"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 20
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }
    );
});



    // for preloader
        var loader = document.getElementById("preloader");
        
        window.addEventListener("load", function(){
            loader.style.display = "none";
        })
    
        //

 
                $(document).ready(function() {
    $('.parent-menu').hover(
    function() {
         $('.submenu').removeClass('show');
        $(this).addClass('rotate');
        $('.submenu', this).addClass('show');
    }, function() {
        $('.submenu', this).removeClass('show');
        $(this).removeClass('rotate');
    });
                    
                    // Toggle Class
                     $(".menu-button").click(function(){
                            $(".menu-ul").toggleClass("show");
                          });
}); 

      /*
** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
*/

// Init slick slider + animation
$('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 40 ) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });
});
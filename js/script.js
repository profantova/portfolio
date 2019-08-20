
// smoth scrolling
$('.scroll a').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
});

//Mobile menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.menu li');


  burger.addEventListener('click',()=>{
      //Toggle nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      }else {
        link.style.animation = 'navLinkFade .5s ease forwards ${index / 7 + 1.5}s';
      }
    });
    //Burger animation
   burger.classList.toggle('toggle');
  });

}

navSlide();

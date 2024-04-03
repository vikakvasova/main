
$('.burger-menu').click (function name(event) {
    

    $('.burger-menu, .navigation-list').toggleClass('active')
    
});
new Swiper ('.slider', {
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    touchRatio: 2,
    grabCursor: true,
    loop: true,
    autoplay:{
 delay:3000,
 disableOnInteraction: false,
    },

});

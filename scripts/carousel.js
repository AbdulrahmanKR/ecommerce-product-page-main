var owl;
owl = $('.no-pop .main-image').owlCarousel({
    loop:false,
    margin:32,
    nav:false,
    dots: true,
    items:1,
    dotData: true,
    dotsData: true,
    dotsContainer: '.no-pop #carousel-custom-dots',
    responsive:{
        0:{
            nav:true,
            navText:[
                `<div class='nav-btn prev-slide'>
                    <img src="images/icon-previous.svg"/>
                </div>`,
                `<div class='nav-btn next-slide'>
                    <img src="images/icon-next.svg"/>
                </div>`
            ],
        },
        1200:{
            nav:false
        }
    }
});

$('.no-pop .owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});


var owlPop;
owlPop = $('.pop-up .main-image').owlCarousel({
    loop:false,
    margin:32,
    nav:false,
    dots: true,
    items:1,
    dotData: true,
    dotsData: true,
    dotsContainer: '.pop-up #carousel-custom-dots',
    nav:true,
    navText:[
        `<div class='nav-btn prev-slide'>
            <img src="images/icon-previous.svg"/>
        </div>`,
        `<div class='nav-btn next-slide'>
            <img src="images/icon-next.svg"/>
        </div>`
    ],
});

$('.pop-up .owl-dot').click(function () {
    owlPop.trigger('to.owl.carousel', [$(this).index(), 300]);
});
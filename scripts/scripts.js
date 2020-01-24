$(document).ready(function (){
      
    const CookingCrousel = $("#cooking-owl-carousel");
    const TestimonialsCarousel = $("#testimonials-owl-carousel");
    
    
        CookingCrousel.owlCarousel({
            items: 3,
            loop:true,
            stagePadding: 180,  
            dots: false,
            nav: true,
            center:true,
            mouseDrag:false,
            URLhashListener:true,
            startPosition: '#cooking-zero-img',
            navText: ['<span><i class="fas fa-long-arrow-alt-left"></i></span>', '<span><i class="fas fa-long-arrow-alt-right"></i></span>'],
            smartSpeed: 1200,
            autoHeight: true,
            responsiveClass:true,
            responsive:{
                0 : {
                    items: 1
                },
                980 : {
                    items: 3,
                    stagePadding: 100,
                    center: true
                },
                1200: {
                    items: 3
                }
            }
        })
    
    
    TestimonialsCarousel.owlCarousel({
        loop:true,
        items: 1,
        dots: false,
        nav: true,
        mouseDrag:false,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: '#testimonials-zero-slide',
        navText: ['<span><i class="fas fa-long-arrow-alt-left"></i></span>', '<span><i class="fas fa-long-arrow-alt-right"></i></span>'],
        smartSpeed: 1200
    })
})
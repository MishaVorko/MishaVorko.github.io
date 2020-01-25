$(document).ready(function (){
      
    const CookingCrousel = $("#cooking-owl-carousel");
    const TestimonialsCarousel = $("#testimonials-owl-carousel");
    const CarouselHashDots = $(".carousel-dots .hash-dot")
    
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
            smartSpeed: 900,
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
    
    
    function CarouserClearDotToggle(el){
         let parentEl = $(el).parent();
         let parentClass = $(parentEl)[0].classList[0];
         let clearElements = $(`.${parentClass} .inner-dot`)
         
         for(dot of clearElements){
          if($(dot).hasClass('active_dot')){
                $(dot).removeClass('active_dot')
            }
        }
    }
    
    function CarouserDotToggle(e){
        CarouserClearDotToggle(this);
        
        let inDot = $(this)[0].children[0].children[0];
        $(inDot).toggleClass('active_dot')
    }
  
    
    CarouselHashDots.click(CarouserDotToggle)
})
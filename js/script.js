$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")    
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
        
    });

    // slide-up scrip
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    // menu google/navbar scrtp
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing animacion scrip
    var typed = new Typed(".typing",{
        strings: ["Multimedia",],
        typeSpeed:100,
        backSpedd:60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Actualmente",],
        typeSpeed:100,
        backSpedd:60,
        loop: true
    });
    var typed = new Typed(".typing-3",{
        strings: ["Premios",],
        typeSpeed:100,
        backSpedd:60,
        loop: true
    });
    var typed = new Typed(".typing-4",{
        strings: ["Pasiones",],
        typeSpeed:100,
        backSpedd:60,
        loop: true
    });

    // owl carousel scrip
    $('.carousel').owlCarousel({
        margin:20,
        loóp: true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
              items:1,
              nav:false
            },
            600:{
                items:2,
                nav:false
            },
              1000:{
                items:3,
                nav:false
              }
        }
        

    })
});


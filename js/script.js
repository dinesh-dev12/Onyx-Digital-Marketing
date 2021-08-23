/*preloader*/
window.addEventListener("load", () =>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },3000)
});

$('.car-1').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1100:{
            items:3
        },
        1600:{
            items:4
        }
    }
})

$('.car-2').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        }
    }
})


$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('myheader');
    else sticky.removeClass('myheader');
});

$(window).scroll(function(){
    var sticky = $('nav'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('colors');
    else sticky.removeClass('colors');
});
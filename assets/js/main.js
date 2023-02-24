AOS.init({once:true});

$(document).ready(function () {
    /* To Top Button */
    let scrollNum = 700;
    $(window).on('scroll' , function () { 
        if($(this).scrollTop() > scrollNum){
            $('.arrow-btn').show()
        }else{
            $('.arrow-btn').hide()
        }
     })
     $('.arrow-btn').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop : 0
        } , 1000)
      })

    /* Typed.js Script */
    let typing = new Typed(".change-text", {
        strings: ['' ,'beautiful graphics', 'functional websites', 'working mobile apps'],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
    });

    // Header fixed
    let headerOffset = $('.header').offset().top;
    $(window).on('scroll' , function () { 
        if($(window).scrollTop() > headerOffset){
            $('.header').addClass('fixed');
            $('.header').css('cssText' , 'background-color : #0d0d0de5 !important');
        }else if($(window).scrollTop() < headerOffset){
            $('.header').removeClass('fixed');
            $('.header').css('cssText' , 'background-color : #0d0d0d !important');
        }
     })

    //  active class
     $('.navbar-nav a:not(".dropdown-item")').on('click' , function (e) { 
        e.preventDefault();
        $('.navbar-nav a').parent().
        children('a').
        removeClass('active');
        $(this).addClass('active');        
      })

    //  dynamic tabs
    $('.navbar-nav > li:not(:first-of-type,:nth-of-type(7)) a').on('click'
    , function () { 
        $('html , body').animate({
            scrollTop:(($('.' + $(this).text().toLowerCase()).offset().top) - $('.header').height())
        } , 500, 'linear')
    })

    // portfolio tabs

    $('.portfolio').on('click' , '.nav-link' ,function () {
        $('.portfolio .nav-link').parent().
        children('a').
        removeClass('active');
        $(this).addClass('active');   
    })

    // portfolio album
     $('.portfolio').on('click' , '.nav-link' ,function () {
            if($(this).text() == 'All'){
                $('.album-all .row div').show(400); 

            }else{
                $('.album-all .row div').hide(400); 
                $('.album-all .row div[box_type='+$(this).text()+']').show(400);
            }
            
       })
});



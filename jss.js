$(function(){
    $('.icon-hamburger').on('click',function(){
        $('.menu-container').fadeIn();
        return false;
    });
    $('.close').on('click',function(){
        $('.menu-container').fadeOut();
        return false;
    });
});
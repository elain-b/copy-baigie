$(function(){
    $('.open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});
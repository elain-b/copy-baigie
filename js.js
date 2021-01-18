jQuery('.icon-hamburger').on('click', function() {
    if(jQuery('.menu-container .menu').css('display') === 'block') {
        jQuery('.menu-container .menu').slideUp('1500');
    }else {
        jQuery('.menu-container .menu').slideDown('1500');
    }
});

jQuery('.close').on('click', function() {
    if(jQuery('.menu-container .menu').css('display') === 'block') {
        jQuery('.menu-container .menu').slideUp('1500');
    }else {
        jQuery('.menu-container .menu').slideDown('1500');
    }
});
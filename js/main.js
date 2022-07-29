$(document).ready(function(){
    $('.btn-open').click(function(){
        $('.modalLogin').fadeIn();
        $('body').addClass('active');
    });
    $('.btn-close').click(function(){
        $('.modalLogin').fadeOut();
        $('body').removeClass('active');
    });
    $('.lan').click(function(){
        $('.lan li.ch').toggle();
    });
});
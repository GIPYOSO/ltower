$(document).ready(function(){
    $('.direction ul:last-child li').click(function(){
        $('.direction ul:last-child li').removeClass('active');
        $(this).addClass('active');
        $('.direction ul:first-child li').removeClass('active');
        $('.direction ul:first-child li').eq($(this).index()).addClass('active');
    })
});
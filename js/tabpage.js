var tabBtn = null;
var tabPg = null;

$(document).ready(function(){
    init();
    tabpageJS(tabBtn,tabPg);
});
function init(){
    tabBtn = $(".tabBtn");
    tabPg = $(".tabPg");
}

function tabpageJS(tabBtn,tabPg){
    $(tabBtn).click(function(){
        $(tabBtn).removeClass('active');
        $(this).addClass('active');
       
        $(tabPg).removeClass('active');
        $('#' + $(this).attr('data-tab')).addClass('active')
    });
}

// $(document).ready(function(){
//     $('ul.service_move li').click(function(){
//         $('ul.service_move li').removeClass('active');
//         $(this).addClass('active');

//         $(tabPg).removeClass('active');
//         $('#' + $(this).attr('data-tabNamne')).addClass('active')
//     })
// })
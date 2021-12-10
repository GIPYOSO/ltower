var selectBox = null;
var selectButton = null;
var closeBtn = null;
var openBtn = null;
var tabBtn = null;
var tabPg = null;
var stabBtn = null;
var stabPg = null;

$(document).ready(function(){
    init();
    toggleBox(selectBox,selectButton);
    popupJS(openBtn,closeBtn);
    tabpageJS(tabBtn,tabPg);
    tabMenu(".Chapter_move1 li");
    tabMenu(".Chapter_move2 li");
    stabpage1JS(stabBtn1,stabPg1);
    stabpage2JS(stabBtn2,stabPg2);
    $('.CloseUp').click(function(){
        alert("종료된 이벤트입니다.")
    })
});

function init(){
    selectBox = $('header > div > div ul');
    selectButton = $('header > div > div button');
    closeBtn = $(".closeBtn");
    openBtn = $(".openBtn");
    tabBtn = $(".tabBtn");
    tabPg = $(".tabPg");
    stabBtn1 = $(".stabBtn1");
    stabPg1 = $(".stabPg1");
    stabBtn2 = $(".stabBtn2");
    stabPg2 = $(".stabPg2");
}

function toggleBox(selectBox,selectButton){
    $(selectButton).click(function(){
        $(selectBox).toggleClass('active');
    });
}

function popupJS(openBtn,closeBtn){
    var openTarget;
    $(openBtn).click(function(){
        openTarget = "#"+ $(this).attr("data-popName");
        $(openTarget).addClass('active');
    });
    $(closeBtn).click(function(){
       $(openTarget).removeClass("active") 
    });
}

function tabpageJS(tabBtn,tabPg){
    $(tabBtn).click(function(){
        $(tabBtn).removeClass('active');
        $(this).addClass('active');
       
        $(tabPg).removeClass('active');
        $('#' + $(this).attr('data-tab')).addClass('active')
    });
}

function tabMenu(tabNumb){
    var $selectMenu = null;

    $(tabNumb).click(function(){
        if($selectMenu != null){
            $selectMenu.removeClass("active");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("active");
    });
}
function stabpage1JS(stabBtn1,stabPg1){
    $(stabBtn1).click(function(){
        $(stabBtn1).removeClass('active');
        $(this).addClass('active');
       
        $(stabPg1).removeClass('active');
        $('#' + $(this).attr('data-tab')).addClass('active')
    });
}
function stabpage2JS(stabBtn2,stabPg2){
    $(stabBtn2).click(function(){
        $(stabBtn2).removeClass('active');
        $(this).addClass('active');
       
        $(stabPg2).removeClass('active');
        $('#' + $(this).attr('data-tab')).addClass('active')
    });
}
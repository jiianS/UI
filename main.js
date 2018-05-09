$(function(){ 
    var duration=300; 
    
    var $aside = $('.page-main > aside');
    var $asidButton= $aside.find('button')
        .on('click',function(){
            $aside.toggleClass('open');
    //toggleclass는 매개변수에 지정한 클래스명이 제이쿼리 객체에 포함된 요소의
    //클래스 속성값으로 지정되어 있는지 확인한 다음, 지정되어 있지 않으면 속성값을 
    //추가하고 이미 지정되어 있다면 제거하는 메서드
            if($aside.hasClass('open')){
    //hasclass는 매개변수에 전달된 클래스명이 요소의 class 속성값으로 지정되었으면 true를 반환하고 지정되지 않았으면 false를 반환.
                $aside.stop(true).animate({left: '-70px'}, duration, 'easeOutBack');
                $asidButton.find('img').attr('src', 'img/btn_close.png');
            }else{
                $aside.stop(true).animate({left: '-300px'}, duration, 'easeInBack');
                $asidButton.find('img').attr('src', 'img/btn_open.png');
            };
        });

});


            $(document).ready(function() {
            
            //[2] more...클릭시 보이기 및 숨기기 토글
            $("span.moreEurope").click(function() {
                console.log("유럽");
                $("#regionEurope").toggle('2000'); 
               
            });
            $("span.moreAsia").click(function() {
                console.log("아시아");
                $("#regionAsia").toggle('2000'); 
               
            });
            $("span.moreAfria").click(function() {
                console.log("아프리카");
                $("#regionAfria").toggle('2000'); 
               
            });
            $("span.moreAmerica").click(function() {
                console.log("아메리카");
                $("#regionAmerica").toggle('2000'); 
               
            });
            $("span.moreOceania").click(function() {
                console.log("오세아니아");
                $("#regionOceania").toggle('2000'); 
               
            });
        });

$(function(){ 
    var duration=300; 
    
   // var $aside = $('.page-main > aside'); 를 아래와 같이 변경

    var $aside = $('aside');
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


//메뉴 hide /show
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
     
            $("#table").click(function(){
                $("#contents").load("table.html");});     
        });


//검색창
$(function(){
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("search");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
$('.search_click').click(function() {
    modal.style.display = "block";
    console.log("검색창");
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };

};
});

//로그인
function eventAction(){
            document.getElementById("login").style.display="none";    
            document.getElementById("user").style.display="block";
            
            var id = document.getElementById("id").value;
            var pw = document.getElementById("pw").value;
            
            document.getElementById("userId").innerHTML = id;
          
        };


//클맀했을떄, contents화면 이동
 $(document).ready(function(){

        $("#trip1").click(function(){
          $("#contents").load("london.html");});

});

 $(document).ready(function(){

        $("#trip1").click(function(){
          $("#contents").load("london.html");});

});
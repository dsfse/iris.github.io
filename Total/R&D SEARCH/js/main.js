$(document).ready(function(){

    $(".mov_page > .container > ul > .list01").mouseenter(function(){
        $(this).children("ul").stop().slideDown(400);
      });
      
      /*메인메뉴에서 마우스 커서가 떠나면, 서브메뉴 드롭업으로 사라짐*/
      $(".mov_page > .container > ul > .list01").mouseleave(function(){
        $(this).children("ul").stop().slideUp(200);
    }); 

    $(".mov_page > .container > ul > .list02").mouseenter(function(){
        $(this).children("ul").stop().slideDown(400);
      });
      
      /*메인메뉴에서 마우스 커서가 떠나면, 서브메뉴 드롭업으로 사라짐*/
      $(".mov_page > .container > ul > .list02").mouseleave(function(){
        $(this).children("ul").stop().slideUp(200);
    }); 
      
}); //document.write 
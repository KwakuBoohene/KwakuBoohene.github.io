$(document).ready(function () {
$(".sidebar-content > div > a").click(function(e) {    
     gTScroll(this.id)
     ToggleDisplay()
 });

$("#navToggle").click(function(e){
     ToggleDisplay()
}) 


})

function gTScroll(id) {  
     $('html, body').animate({
          scrollTop: $("div."+id).offset().top
     }, 1000)
 }

 function ToggleDisplay(){

     var side = ($(".sidebar-content").css("display"));
     var winwidth = $(window).width()
     
      if( side != "none" && winwidth <=1024){
          $(".sidebar-content").hide();
      }else{
           $(".sidebar-content").show();
      }
 }
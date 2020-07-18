$(document).ready(function () {
$(".sidebar-content > div > a").click(function(e) {
    console.log(this.id)     
     gTScroll(this.id)
 });
})

function gTScroll(id) {
     
     $('html, body').animate({
          scrollTop: $("div."+id).offset().top
     }, 1000)

 }
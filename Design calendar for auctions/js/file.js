$(document).ready(function(){
  $("#hide").click(function(){
    $(".effect").hide();
    $(".effect").hide();
    $(".effect").hide();
});

$("#show").click(function(){
    $(".effect").show();
    $(".effect").show();
    $(".effect").show();
});

$("#toggle").click(function(){
    $(".effect").toggle();
    $(".effect").toggle();
    $(".effect").toggle();
});


$("#fadeIn").dblclick(function(){
    $(".effect").fadeIn("slow");
});

$("#fadeOut").dblclick(function(){
    $(".effect").fadeOut("slow");
});

$("#fadeTo").dblclick(function(){
  $(".effect").fadeTo("slow", 0.4);
});

$("#fadeToggle").dblclick(function(){
  $(".effect").fadeToggle("slow");
});

$("#anim").on('mouseenter mouseleave', function(e) {
   if (e.type === 'mouseenter'){
      $(this).animate({'width': '500px'}, 1000, function(){
        alert("Done!");
      }
      );
    }
   else if(e.type === 'mouseleave'){
      $(this).stop(true);

  }

});
$("body").keypress(function(){
$("#key").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
});

$("body").keydown(function(){
$("#anim").animate({'width': '60%'}, 500).animate({'width': '30%'}, 500).animate({'width': '60%'}, 500).animate({'width': '30%'}, 500).animate({'width': '60%'}, 500);
});

});

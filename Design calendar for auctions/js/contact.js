$(document).ready(function(){
  $("#addrow").click(function(){
    $(".dynatable").append('<tr><td contentEditable></td><td contentEditable></td><td contentEditable></td><td contentEditable></td><td><button class="delrow" value="Delete Row" >Delete Row</button></td></tr>');
});
$(document).on('click', 'button.delrow', function () { // <-- changes
 $(this).closest('tr').remove();
 return false;
});

});
$(document).on('mouseenter mouseleave','.dynatable td', function(e){
        if (e.altKey) {
            removeffect();
            if (e.type === 'mouseenter') {
                $(this).addClass('mouseover');
            }
        }
    });

    var removeffect = function () {
        $('.mouseover').removeClass('mouseover');
    };

    $(document).on('keyup', function (e) {
        removeffect();
        return false;
    });

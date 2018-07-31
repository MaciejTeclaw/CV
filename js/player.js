$(function () {

    const player = '<div class="player"></div>';
    $('.map').append(player);


    $(document).keydown(function (e) {

        let position = $('.player').position({top: '300px', left: '300px'});
       switch (e.keyCode)
       {
           case 37:
               $(".player").css('left', position.left - 10 + 'px');
               break;
           case 38:
               $(".player").css('top', position.top - 10 + 'px');
               break;
           case 39:
               $(".player").css('left', position.left +10 + 'px');
               break;
           case 40:
               $(".player").css('top', position.top +10 + 'px');
               break;
       }
    })

});


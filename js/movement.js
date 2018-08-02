$(function () {

    $(document).keydown(function (e) {

        const player = $(".player");

        let position = player.position();
        switch (e.keyCode) {
            case 37:
                player.css('left', position.left - 10 + 'px');
                break;
            case 38:
                player.css('top', position.top - 10 + 'px');
                break;
            case 39:
                player.css('left', position.left + 10 + 'px');
                break;
            case 40:
                player.css('top', position.top + 10 + 'px');
                break;
        }
    })

});
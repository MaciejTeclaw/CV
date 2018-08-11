$(function () {

    $(document).keydown(function (movement) {

        const map = $('.map');
        const info = $('.info');

        const about = $('.about');    // ABOUT
        const aboutPos = about.position();
        let aboutPosLeft = function () {
            return (aboutPos.left)
        };
        let aboutPosTop = function () {
            return (aboutPos.top)
        };
        const aboutEl = '<div class="aboutEl"></div>'; // ABOUT
        const addAbout = $('.aboutEl');


        const player = $('.player');
        let playerPosition = player.position();
        let playerPosLeft = function () {
            return (playerPosition.left)
        };
        let playerPosTop = function () {
            return (playerPosition.top)
        };

        switch (movement.keyCode) {
            case 37:
                player.css('left', playerPosition.left - 10 + 'px');
                if (playerPosLeft() <= 0) {
                    player.css('left', playerPosition.left + 10 + 'px')
                }
                info.remove();
                break;
            case 38:
                player.css('top', playerPosition.top - 10 + 'px');
                if (playerPosTop() <= 0) {
                    player.css('top', playerPosition.top + 10 + 'px')
                }
                info.remove();
                break;
            case 39:
                player.css('left', playerPosition.left + 10 + 'px');
                if (playerPosLeft() >= map.width() - player.width()) {
                    player.css('left', playerPosition.left - 10 + 'px')
                }
                info.remove();
                break;
            case 40:
                player.css('top', playerPosition.top + 10 + 'px');
                if (playerPosTop() >= map.height() - player.height()) {
                    player.css('top', playerPosition.top - 10 + 'px')
                }
                info.remove();
                break;
        }

        if (playerPosLeft() >= aboutPosLeft() && playerPosTop() >= aboutPosTop()) {
            if (addAbout.length === 0){
                map.append(aboutEl)
            }
        }else {
            addAbout.remove()
        }

    });


});

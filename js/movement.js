$(function () {


    $(document).keydown(function (movement) {

            const player = $('.player');
            let playerPosition = player.position();

            // const expPosition = $('.exp').position();
            // const letterPosition = $('.letter').position();
            // const skillPosition = $('.skills').position();
            // const aboutMePosition = $('.aboutMe').position();

            switch (movement.keyCode) {
                case 37:
                    player.css('left', playerPosition.left - 10 + 'px');
                    break;
                case 38:
                    player.css('top', playerPosition.top - 10 + 'px');
                    break;
                case 39:
                    player.css('left', playerPosition.left + 10 + 'px');
                    break;
                case 40:
                    player.css('top', playerPosition.top + 10 + 'px');
                    break;
            }


            //COLLISION


        }
    )
});

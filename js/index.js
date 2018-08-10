$(function () {

    //OBJECTS

    const playerOne = '<div class="player"></div>';
    $('.map').append(playerOne);
    const aboutMe = '<div class="about"></div>';
    $('.map').append(aboutMe);
    const letter = '<div class="letter"></div>';
    $('.map').append(letter);
    const exp = '<div class="exp"></div>';
    $('.map').append(exp);
    const skills = '<div class="skillsAndHobby"></div>';
    $('.map').append(skills);

    //MOVEMENT

    $(document).keydown(function (movement) {

        const player = $('.player');
        const playerW = player.width();
        const playerH = player.height();
        const info = $('.info');


        let playerPosition = player.position();
        let playerPosW = function () {
            return (playerPosition.left)
        };
        let playerPosH = function () {
            return (playerPosition.top)
        };

        switch (movement.keyCode) {
            case 37:
                player.css('left', playerPosition.left - 10 + 'px');
                if (playerPosW() <= 0){
                    player.css('left', playerPosition.left + 10 + 'px')
                }
                info.remove();
                break;
            case 38:
                player.css('top', playerPosition.top - 10 + 'px');
                if (playerPosH() <= 0){
                    player.css('top', playerPosition.top + 10 + 'px')
                }
                info.remove();
                break;
            case 39:
                player.css('left', playerPosition.left + 10 + 'px');
                if (playerPosW() >= 1200 - playerW){
                    player.css('left', playerPosition.left - 10 + 'px')
                }
                info.remove();
                break;
            case 40:
                player.css('top', playerPosition.top + 10 + 'px');
                if(playerPosH() >= 600 - playerH){
                    player.css('top', playerPosition.top - 10 + 'px')
                }
                info.remove();
                break;
        }

    });


});

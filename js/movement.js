$(function () {

    $(document).keydown(function (movement) {

        const map = $('.map');
        const info = $('.info');


        const player = $('.player');
        let playerPosition = player.position();
        let playerPosLeft = function () {
            return (playerPosition.left)
        };
        let playerPosTop = function () {
            return (playerPosition.top)
        };

        /* ABOUT ME */

        const about = $('.about');
        const aboutPos = about.position();
        let aboutPosLeft = function () {
            return (aboutPos.left)
        };
        let aboutPosTop = function () {
            return (aboutPos.top)
        };

        const aboutEl = '<div class="aboutEl border-3">' +
            '<h3>Imię i nazwisko: Maciej Tecław</h3>' +
            '<p>Data urodzenia: 08.03.1990</p>' +
            '<p>Adres: ul. Jasna Rola, 36F/23, 61-680 Poznań</p>' +
            '<p>Telefon: 669258394</p>' +
            '<p>Email: maciejteclaw1990@gmail.com</p>' +
            '<p>Linki: <br> GitHub: https://github.com/MaciejTeclaw <br>LinkedIn: www.linkedin.com/in/maciej-tecław-388091167/</p>' +
            '</div>';
        const addAbout = $('.aboutEl');

        /* LETTER */

        const letter = $('.letter');
        const letterPos = letter.position();
        let letterPosLeft = function () {
            return (letterPos.left)
        };
        let letterPosTop = function () {
            return (letterPos.top)
        };
        const letterEl = '<div class="letterEl border-3"></div>';
        const addLetter = $('.letterEl')



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
            if (addAbout.length === 0) {
                map.append(aboutEl)
            }
        } else {
            addAbout.remove()
        }

        if (playerPosLeft() <= letterPosLeft() + (letter.width() - player.width()) &&
            playerPosTop() <= letterPosTop() + (letter.height() - player.height())){
            if (addLetter.length === 0){
                map.append(letterEl)
            }
        }else {
            addLetter.remove()
        }

    });
});

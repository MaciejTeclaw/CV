$(function () {

    $(document).keydown(function (movement) {

        const map = $('.map');
        const info = $('.info');
        const bubbly = $('.arrow_box');


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
            '<p>Adres: ul. Jasna Rola, 36F/23, 61-609 Poznań</p>' +
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
        const letterEl = '<div class="letterEl border-6"></div>';
        const addLetter = $('.letterEl');

        /* SKILLS AND HOBBY */

        const sah = $('.skillsAndHobby');
        const sahPos = sah.position();
        let sahPosLeft = function () {
            return (sahPos.left)
        };
        let sahPosTop = function () {
            return (sahPos.top)
        };
        const sahEl = '<div class="sahEl border-5"></div>';
        const addSah = $('.sahEl');

        /* EXP */

        const exp = $('.exp');
        const expPos = exp.position();
        let expPosLeft = function () {
            return (expPos.left)
        };
        let expPosTop = function () {
            return (expPos.top)
        };
        const expEl = '<div class="expEl border-4"></div>';
        const addExp = $('.expEl');



        switch (movement.keyCode) {
            case 37:
                player.css('left', playerPosition.left - 20 + 'px');
                if (playerPosLeft() <= 0) {
                    player.css('left', playerPosition.left + 20 + 'px')
                }
                info.fadeOut(300, function(){ info.remove(); });
                bubbly.fadeOut(300, function(){ bubbly.remove(); });
                break;
            case 38:
                player.css('top', playerPosition.top - 20 + 'px');
                if (playerPosTop() <= 0) {
                    player.css('top', playerPosition.top + 20 + 'px')
                }
                info.fadeOut(300, function(){ info.remove(); });
                bubbly.fadeOut(300, function(){ bubbly.remove(); });
                break;
            case 39:
                player.css('left', playerPosition.left + 20 + 'px');
                if (playerPosLeft() >= map.width() - player.width()) {
                    player.css('left', playerPosition.left - 20 + 'px')
                }
                info.fadeOut(300, function(){ info.remove(); });
                bubbly.fadeOut(300, function(){ bubbly.remove(); });
                break;
            case 40:
                player.css('top', playerPosition.top + 20 + 'px');
                if (playerPosTop() >= map.height() - player.height()) {
                    player.css('top', playerPosition.top - 20 + 'px')
                }
                info.fadeOut(300, function(){ info.remove(); });
                bubbly.fadeOut(300, function(){ bubbly.remove(); });
                break;
        }

        if (playerPosLeft() >= aboutPosLeft() &&
            playerPosTop() >= aboutPosTop()) {
            if (addAbout.length === 0) {
                $(aboutEl).hide().appendTo(map).slideToggle();
            }
        } else {
            addAbout.slideToggle(500, function(){ $(this).remove();});
        }

        if (playerPosLeft() <= letterPosLeft() + (letter.width() - player.width()) &&
            playerPosTop() <= letterPosTop() + (letter.height() - player.height())){
            if (addLetter.length === 0){
                $(letterEl).hide().appendTo(map).slideToggle();
            }
        }else {
            addLetter.slideToggle(500, function(){ $(this).remove();});
        }

        if (playerPosLeft() <= sahPosLeft() + (sah.width() - player.width()) &&
            playerPosTop() >= sahPosTop()){
            if(addSah.length === 0){
                $(sahEl).hide().appendTo(map).slideToggle();
            }
        }else{
            addSah.slideToggle(500, function(){ $(this).remove();});
        }

        if (playerPosLeft() >= expPosLeft() &&
            playerPosTop() <= expPosTop() + (exp.height() - player.width())){
            if (addExp.length === 0){
                $(expEl).hide().appendTo(map).slideToggle();
            }
        }else{
            addExp.slideToggle(500, function(){ $(this).remove();});
        }
    });
});
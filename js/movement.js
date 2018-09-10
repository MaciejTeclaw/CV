$(function () {

    $(document).keydown(function (movement) {

            /* GENERAL */

            const map = $('.map');
            const info = $('.info');
            const bubbly = $('.arrow_box');


            // delete elements on move //
            function removeEl(firstEl, secondEl, time) {
                firstEl.fadeOut(time, function () {
                    firstEl.remove();
                });
                secondEl.fadeOut(time, function () {
                    secondEl.remove();
                });
            }

            // hide and add elements //
            function hideAndAdd(el, hideEl) {
                if (el.length === 0) {
                    $(hideEl).hide().appendTo(map).slideToggle();
                }
            }

            // hide and remove elements //

            function hideAndRemove(addedEl) {
                addedEl.slideToggle(500, function () {
                    addedEl.remove();
                })
            }

            /* PLAYER */

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
                '<p>Adres: ul. Jasna Rola 36F/23 <br> 61-609 Poznań</p>' +
                '<p>Telefon: 669258394</p>' +
                '<p>Email: maciejteclaw1990@gmail.com</p>' +
                '<p>Linki: <br> GitHub: https://github.com/MaciejTeclaw <br>LinkedIn: www.linkedin.com/in/maciej-teclaw-388091167/</p>' +
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
            const letterEl = '<div class="letterEl border-6"><p>"Moje wcześniejsze doświadczenie zawodowe opiera się głównie na kontakcie z Klientem. Doszedłem jednak do wniosku, że zmiana branży umożliwi mi podjęcie pracy zgodnej z moimi zainteresowaniami, stworzy większe możliwości samorozwoju, a także pozwoli mi podjąć pracę, która się nie nudzi. Postawiłem na programowanie. Od tamtego momentu ukończyłem stacjonarny kurs JavaScript oraz spędzam coraz więcej wolnego na kodowaniu oraz doszkalaniu się w tej dziedzinie."</p></div>';
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
            const sahEl = '<div class="sahEl border-5">' +
                '<h3> Umiejętności:</h3>' +
                '<p> HTML,CSS, JavaScript (JQuery, React), Git, Gulp, Webpack <br> Język Angielski - średniozaawansowany' +
                '<br> Język niemiecki - podstawowy </p>' +
                '<h3>Zainteresowania:</h3>' +
                '<p> Muzyka rockowa oraz elektroniczna <br> Tresura psów <br> Piłka nożna (głównie Ekstraklasa oraz Lech Poznań)' +
                '<br> Jazda rowerem</p></div>';
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
            const expEl = '<div class="expEl border-4">' +
                '<h3> Doświadczenie:</h3>' +
                '<p>01.2012 - 03.2017 - Pizza Express <br> Kierowca, Dyspozytor-Kierownik Zmiany</p>' +
                '<p>10.2016 - 04.2018 - OLX Group <br> Specjalista Do Spraw Obsługi Użytkownika</p>' +
                '<p>08.2018 - Obecnie - PolPol.pl <br> Stażysta - HTML, CSS, JavaScript (JQuery)</p>' +
                '</div>';
            const addExp = $('.expEl');


            // shark movement //
        const shark = $('.shark');

            function sharkAnimation() {

                shark.animate({
                    left: "+1350px",
                }, 2000);
                shark.animate({
                    top: "+640px",
                }, 1000);
                shark.animate({
                    left: "+50px",
                }, 2000);
                shark.animate({
                    top: "+10px",
                }, 1000);

            }

            sharkAnimation();

            // movement on arrows //

            switch (movement.keyCode) {
                case 37:
                    player.css('left', playerPosition.left - 20 + 'px');
                    if (playerPosLeft() <= 0) {
                        player.css('left', playerPosition.left + 20 + 'px')
                    }
                    removeEl(info, bubbly, 300);
                    break;
                case 38:
                    player.css('top', playerPosition.top - 20 + 'px');
                    if (playerPosTop() <= 0) {
                        player.css('top', playerPosition.top + 20 + 'px')
                    }
                    removeEl(info, bubbly, 300);
                    break;
                case 39:
                    player.css('left', playerPosition.left + 20 + 'px');
                    if (playerPosLeft() >= map.width() - player.width()) {
                        player.css('left', playerPosition.left - 20 + 'px')
                    }
                    removeEl(info, bubbly, 300);
                    break;
                case 40:
                    player.css('top', playerPosition.top + 20 + 'px');
                    if (playerPosTop() >= map.height() - player.height()) {
                        player.css('top', playerPosition.top - 20 + 'px')
                    }
                    removeEl(info, bubbly, 300);
                    break;
            }

            // show and remove about me element //

            if (playerPosLeft() >= aboutPosLeft() &&
                playerPosTop() >= aboutPosTop()) {
                hideAndAdd(addAbout, aboutEl)
            } else {
                hideAndRemove(addAbout)
            }

            // show and remove cover letter element //

            if (playerPosLeft() <= letterPosLeft() + (letter.width() - player.width()) &&
                playerPosTop() <= letterPosTop() + (letter.height() - player.height())) {
                hideAndAdd(addLetter, letterEl)
            } else {
                hideAndRemove(addLetter)
            }

            // show and remove skills and hobby element //

            if (playerPosLeft() <= sahPosLeft() + (sah.width() - player.width()) &&
                playerPosTop() >= sahPosTop()) {
                hideAndAdd(addSah, sahEl)
            } else {
                hideAndRemove(addSah)
            }

            // show and remove experience element //

            if (playerPosLeft() >= expPosLeft() &&
                playerPosTop() <= expPosTop() + (exp.height() - player.width())) {
                hideAndAdd(addExp, expEl)
            } else {
                hideAndRemove(addExp)
            }
        }
    );
});
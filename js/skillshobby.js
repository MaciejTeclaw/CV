const sahObj = {
    sah: $('.skillsAndHobby'),
    sahPos: sah.position(),
    addSah: $('.sahEl'),
    sahEl: '<div class="sahEl border-5">' +
    '<h3> Umiejętności:</h3>' +
    '<p> HTML,CSS, JavaScript (JQuery, React), Git, Gulp, Webpack <br> Język Angielski - średniozaawansowany' +
    '<br> Język niemiecki - podstawowy </p>' +
    '<h3>Zainteresowania:</h3>' +
    '<p> Muzyka rockowa oraz elektroniczna <br> Tresura psów <br> Piłka nożna (głównie Ekstraklasa oraz Lech Poznań)' +
    '<br> Jazda rowerem</p></div>',
    sahPosLeft : function () {
        return (sahObj.sahPos.left)
    },
    sahPosTop : function () {
        return (sahObj.sahPos.top)
    }
};
const aboutObj = {
    about : $('.about'),
    aboutPos : about.position(),
    addAbout : $('.aboutEl'),
    aboutEl : '<div class="aboutEl border-3">' +
    '<h3>Imię i nazwisko: Maciej Tecław</h3>' +
    '<p>Data urodzenia: 08.03.1990</p>' +
    '<p>Adres: ul. Jasna Rola 36F/23 <br> 61-609 Poznań</p>' +
    '<p>Telefon: 669258394</p>' +
    '<p>Email: maciejteclaw1990@gmail.com</p>' +
    '<p>Linki: <br> GitHub: https://github.com/MaciejTeclaw <br>LinkedIn: www.linkedin.com/in/maciej-teclaw-388091167/</p>' +
    '</div>',
    aboutPosLeft : function () {
        return (aboutObj.aboutPos.left)
    },
    aboutPosTop : function () {
        return (aboutObj.aboutPos.top)
    }

};
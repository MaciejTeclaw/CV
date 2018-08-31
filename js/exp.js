const expObj = {
    exp: $('.exp'),
    expPos: exp.position(),
    addExp: $('.expEl'),
    expEl: '<div class="expEl border-4">' +
    '<h3> Doświadczenie:</h3>' +
    '<p>01.2012 - 03.2017 - Pizza Express <br> Kierowca, Dyspozytor-Kierownik Zmiany</p>' +
    '<p>10.2016 - 04.2018 - OLX Group <br> Specjalista Do Spraw Obsługi Użytkownika</p>' +
    '<p>08.2018 - chwila obecna - PolPol.pl <br> Stażysta - HTML, CSS, JavaScript (JQuery)</p>' +
    '</div>',
    expPosTop : function () {
        return (expObj.expPos.top)
    },
    expPosLeft : function () {
        return (expObj.expPos.left)
    }
};
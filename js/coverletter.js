const letterObj = {
    letter : $('.letter'),
    letterPos : letter.position(),
    addLetter : $('.letterEl'),
    letterEl : '<div class="letterEl border-6"><p>"Moje wcześniejsze doświadczenie zawodowe opiera się głównie na kontakcie z Klientem. Doszedłem jednak do wniosku, że zmiana branży umożliwi mi podjęcie pracy zgodnej z moimi zainteresowaniami, stworzy większe możliwości samorozwoju, a także pozwoli mi podjąć pracę, która się nie nudzi. Postawiłem na programowanie. Od tamtego momentu ukończyłem stacjonarny kurs JavaScript oraz spędzam coraz więcej wolnego na kodowaniu oraz doszkalaniu się w tej dziedzinie."</p></div>',
    letterPosLeft : function () {
        return (letterObj.letterPos.left)
    },
    letterPosTop : function () {
        return (letterObj.letterPos.top)
    }
};
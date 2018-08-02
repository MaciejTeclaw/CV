$(function() {

    const aboutMe = '<div class="about"></div>';
    $('.map').append(aboutMe);

    $('.about').on('click', function (event) {
        event.preventDefault();
        alert("Kliknięte")
    })

});
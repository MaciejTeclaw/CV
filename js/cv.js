$(function () {

    const cv = $('.gen');

    cv.on('mouseenter', function () {
        $('.gen').addClass('cvGenHover')
    });
    cv.on('mouseleave', function () {
        $('.gen').removeClass('cvGenHover')
    });


});


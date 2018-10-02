$(function () {

        function sharkAnimation() {

            const shark = $('#shark');

            for (let i =1; i < 1000; i++) {

                shark.animate({
                    left: "+95%",
                }, 2000);
                // shark.css('background', 'url(../images/shark-fin.png)');
                shark.animate({
                    top: "+95%",
                }, 1000);
                shark.animate({
                    left: "+1%",
                }, 2000);
                shark.animate({
                    top: "+1%",
                }, 1000);
            }
        }
    sharkAnimation();
});

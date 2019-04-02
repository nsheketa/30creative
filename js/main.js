$(document).ready(function () {
    $('.hamburger').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('body, html').toggleClass('no-scroll');
        $('.intro').toggleClass('is-active');
    })

});

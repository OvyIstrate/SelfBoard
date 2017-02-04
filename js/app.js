$(function() {
    "use strict";
    var $window = $(window),
        /* window cash */
        $loading = $('.loading'),
        /* loading cash */
        $body = $("body"),
        /* body cash */
        $header = $('.large-header'),
        /* header cash */
        $nav = $('#nav'),
        /* nav cash */
        $link = $("#nav a"),
        /* nav a cash */
        $brush = $(".option");

    /* Loading Animations */
    $window.on("load", function() {
        $loading.fadeOut();
        $body.css({ overflow: "visible" });
        $header.css({ display: "block" });
    });

    /* Nav scroll */
    $window.on("scroll", function() {
        if ($window.scrollTop() > 280) {
            $nav.addClass("scroll");
            $brush.addClass("scroll");

        } else {
            //remove the background property
            $nav.removeClass("scroll");
            $brush.removeClass("scroll");
        }
    });
    /* Nav Toggle */
    $link.on("click", function() {
        if ($(".navbar-toggle").css("display") !== "none") {
            $(".navbar-toggle").trigger("click");
        }
    });

    /* Active Toggle */
    $window.on("scroll", function(event) {
        var $scrollPos = $(document).scrollTop(),
            $links = $('.nav li a');
        $links.each(function() {
            var $currLink = $(this),
                $refElement = $($currLink.attr("href"));
            if ($refElement.position().top <= $scrollPos + 100 && $refElement.position().top + $refElement.height() > $scrollPos) {
                $links.removeClass("active").blur();
                $currLink.addClass("active");
            } else {
                $currLink.removeClass("active");
            }
        });
    });
    /* Wow */
    new WOW().init();

    $('.option').on("click", function() {
        $('.box').toggleClass('open');
    });
    $('body').on('click', function(e) {
        if (!$(e.target).closest('.box').length) {
            $('.box').removeClass('open');
        }
    });
    $('.green').on("click", function() {
        $('#color').attr("href", "control/css/green.css");
    });
    $('.blue').on("click", function() {
        $('#color').attr("href", "control/css/blue.css");
    });
    $('.orange').on("click", function() {
        $('#color').attr("href", "control/css/orange.css");
    });
    $('.purple').on("click", function() {
        $('#color').attr("href", "control/css/purple.css");
    });
    $('.crimson').on("click", function() {
        $('#color').attr("href", "control/css/crimson.css");
    });
});
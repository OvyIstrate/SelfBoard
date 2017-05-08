$(function() {
    "use strict";
    var $window = $(window),
        $loading = $('.loading'),
        $body = $("body"),
        $header = $('.large-header'),
        $nav = $('#nav'),
        $link = $("#nav a"),
        $brush = $(".option");

    $window.on("load", function() {
        $loading.fadeOut();
        $body.css({ overflow: "visible" });
        $header.css({ display: "block" });
    });

    $window.on("scroll", function() {
        if ($window.scrollTop() > 280) {
            $nav.addClass("scroll");
            $brush.addClass("scroll");

        } else {
            $nav.removeClass("scroll");
            $brush.removeClass("scroll");
        }
    });
    $link.on("click", function() {
        if ($(".navbar-toggle").css("display") !== "none") {
            $(".navbar-toggle").trigger("click");
        }
    });

    $window.on("scroll", function(event) {
        var $scrollPos = $(document).scrollTop(),
            $links = $('.nav li a');
        $links.each(function() {
            var $currLink = $(this),
                $refElement = $($currLink.attr("href"));
            if ($refElement.position()) {
                if ($refElement.position().top <= $scrollPos + 100 && $refElement.position().top + $refElement.height() > $scrollPos) {
                    $links.removeClass("active").blur();
                    $currLink.addClass("active");
                }
            } else {
                $currLink.removeClass("active");
            }
        });
    });
    new WOW().init();

    $('.option').on("click", function() {
        $('.box').toggleClass('open');
    });
    $('body').on('click', function(e) {
        if (!$(e.target).closest('.box').length) {
            $('.box').removeClass('open');
        }
    });
    $('.gray').on("click", function() {
        $('#color').attr("href", "../css/gray.css");
    });
    $('.blue').on("click", function() {
        $('#color').attr("href", "../css/blue.css");
    });
    $('.green').on("click", function() {
        $('#color').attr("href", "../css/green.css");
    });
    $('.black').on("click", function() {
        $('#color').attr("href", "../css/black.css");
    });
});
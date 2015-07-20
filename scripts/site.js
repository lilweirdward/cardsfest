$('document').ready(function() {
    $('.box').click(function() {
        if ($(this).siblings('.box').children('.dropdown').is(':visible')) {
            $(this).siblings('.box').children('.dropdown').slideUp(200);
            $(this).siblings('.box').removeClass('on');
        }

        $(this).children('.dropdown').slideToggle(300);
        $(this).toggleClass('on');
    });

    $('.box.right .dropdown').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
    });

    var header = $('.section.header');
    var beginning = $('.section.beginning');
    var store = $('.section.store');
    var backtotop = $('.backtotop');
    var title = $('.section.product .title');
    var headerTop = header.position().top;
    if (store.length) {
        var storeTop = store.position().top;
    } else {
        var storeTop = 0;
    }
    if (title.length) {
        var titleTop = $('.section.product').position().top;
    } else {
        var titleTop = 0;
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (header.hasClass('special')) {
            if (scroll >= headerTop) {
                header.removeClass('static');
                backtotop.addClass('on');

            } else {
                header.addClass('static');
                backtotop.removeClass('on');
            }
        }

        if (scroll >= storeTop) {
            beginning.addClass('moved');
        } else {
            beginning.removeClass('moved');
        }

        // if (scroll >= (titleTop - 80)) {
        //     title.addClass('on');
        //     if (scroll >= (storeTop)) {
        //         title.removeClass('on');
        //         title.addClass('stuck');
        //     } else {
        //         title.removeClass('stuck');
        //         title.addClass('on');
        //     }
        // } else {
        //     title.removeClass('on');
        // }
    });

    var height = $('.section.footer').outerHeight();
    $('#footerfollow').css('height', height);

    $('.backtotop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('i.fa-chevron-down').click(function() {
        $('html, body').animate({
            scrollTop: (storeTop)
        }, 500);
    });

    $('.nohref').click(function() {
        $('.contact').addClass('on');
    });

    $('.contact i.fa-close').click(function() {
        $('.contact').removeClass('on');
    });

    $('.section.store .item').hover(function() {
        $(this).children('.overlay').slideToggle(300);
    });
});

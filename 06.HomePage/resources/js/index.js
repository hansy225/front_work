$(() => {
    $('.nav').mouseover(function() {
        $('.submenu').stop().slideDown();
    });
    $('.nav>li').mouseout(function() {
        $('.submenu').stop().slideUp();
    });

    setInterval(slide, 2000);
    // x = [img1, img2, img3]
    let x = $('#imgslide>img');
    let y = 3;
    function slide() {
        y--;
        if (y==0) {
            x.fadeIn();
            y=3;
        } else {
            x.eq(y).fadeOut();
        }
    }

})
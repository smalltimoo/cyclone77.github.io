$(function () {
    //滚动条
    //$("body").jScrollPane({ showArrows: true });
    //$(window).resize(function () {
    //    $("body").jScrollPane({ showArrows: true });
    //})
    //锚点
    $(".titleCon a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
})
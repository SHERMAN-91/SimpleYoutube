$(".menuBut").on("click", function () {
    console.log("kkk")
    $(".side").toggleClass("side2");
    $(".sida").toggleClass("sida2");
    $(".videoSection").toggleClass("videoSection2");
    $(".videovlock").toggleClass("videovlock2");
    $(".links").toggleClass("links2");
    $(".bsR").toggleClass("bsR2");


})
$(".bsL").on("click", function () {

    $(".links")[0].scrollLeft -= 100;
})
$(".bsR").on("click", function () {
    console.log($(".links")[0].scrollLeft)
    $(".links")[0].scrollLeft += 100;
})

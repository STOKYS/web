$(function () {
    $("section").hide();
    $("h2").on("click", function () {
        $(this).nextUntil("h2").toggle(1000);
    });
})
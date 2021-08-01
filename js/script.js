$("a[href*=\\#]").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500, "linear");
});

function showDiscord() {
    if ($(".discord").css("display") == "none") {
        $(".discord").css("display", "block")
        $(".info").css("filter", "blur(5px)")
    } else {
        $(".discord").css("display", "none")
        $(".info").css("filter", "")
    }
}
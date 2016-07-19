// TOGGLE MENU
$(document).ready(function() {
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#menu").toggleClass("visible");
    });
    $("#menu ul li a").click(function() {
        $("#toggle").toggleClass("on");
        $("#menu").toggleClass("visible");
    });
});


$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['director', 'technical', 'editor', 'hawkeye', 'investment', 'economics', 'marketing', 'quizzing', 'resources'],


    });
});

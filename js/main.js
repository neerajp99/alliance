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
        anchors: ['start', 'about', 'team', 'team1','achievements','faculty','alumni'],
        recordHistory: true,
        scrollingSpeed: 1000,
        slidesNavigation: true,
        loopHorizontal: false,
        afterLoad: function(anchorLink, index) {
            //section 2 loaded
            if (index == 2) {
                //adding active class to the 1st element in the slide menu
                $('#menu').find('li').eq(0).addClass('active');
                $('#menu').find('li').eq(1).removeClass('active');
                $('#menu').find('li').eq(2).removeClass('active');
            }
            if (index == 3) {
                //adding active class to the 1st element in the slide menu
                $('#menu').find('li').eq(1).addClass('active');
                $('#menu').find('li').eq(0).removeClass('active');
                $('#menu').find('li').eq(2).removeClass('active');
            }
            if (index == 4) {
                //adding active class to the 1st element in the slide menu
                $('#menu').find('li').eq(2).addClass('active');
                $('#menu').find('li').eq(1).removeClass('active');
                $('#menu').find('li').eq(0).removeClass('active');
            }

  			
        }
    });
});








$(document).ready(function() {
    $('#fullpage').fullpage();
    $('.clickDown').click(function() {
        $.fn.fullpage.moveSectionDown();
    });
    
});

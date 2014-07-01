$(document).ready(function() {
    $('#fullpage').fullpage();
    $('.clickDown').click(function() {
        $.fn.fullpage.moveSectionDown();

    });
});

    //Click on the down button and move to another section
//     $('#down-button').click(function() {
//          $('#down-button').scroll() 
//     });
// });




// function top() {
//     document.getElementById( 'top' ).scrollIntoView();    
// };

// function bottom() {
//     document.getElementById( 'bottom' ).scrollIntoView();
//     window.setTimeout( function () { top(); }, 2000 );
// };

// bottom();


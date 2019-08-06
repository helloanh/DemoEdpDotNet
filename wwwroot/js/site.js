// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// JavaScript Document

// create the back to top button
$('#topbar').prepend('<a href="#" class="back-to-top va-text-center va-padding_topbottom_sm" title="Return to the top of the page"><i class="far fa-arrow-alt-circle-up fa-2x"></i><span class="usa-sr-only">TOP</span></a>');

// change the value with how many pixels scrolled down the button will appear
var amountScrolled = 200;

$(window).scroll(function() {
    'use strict';
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('.usa-footer-return-to-top a,.back-to-top, .topper').click(function () {
    'use strict';
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});

$("a").on('click', function (event) {
'use strict';
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 400, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

/* VCL Modal*/


var $modalTrigger = $('.va-crisis-line-button'),$modalWrapper = $('#modal-crisisline'),$modalClose = $('.va-modal-close'),$modalTitle = $('#va-crisis-primary'), $mainContent = $('#main-content');

function setModalButton() {
var firstAnchor = document.getElementById("va-crisis-primary"),
lastAnchor = document.getElementById("va-vcl-close-btn");

function keydownHandler(e) {
var evt = e || window.event;
var keyCode = evt.which || evt.keyCode;
if(keyCode === 9) { // TAB pressed
        if(evt.preventDefault) evt.preventDefault();
        else evt.returnValue = false;
        firstAnchor.focus();
}
}

if(lastAnchor.addEventListener) lastAnchor.addEventListener('keydown', keydownHandler, false);
else if(lastAnchor.attachEvent) lastAnchor.attachEvent('onkeydown', keydownHandler);

    'use strict';
  $modalTrigger.on("click", function(e){
    $mainContent.attr('aria-hidden', 'true');
    $modalWrapper.attr('aria-hidden', 'false');
    $modalWrapper.css('display', 'block');
    $modalTitle.focus();
    deflectFocus();
  });
}

function setModalClose() {
    'use strict';
  $modalClose.on("click", function(e){
    $modalWrapper.attr('aria-hidden', 'true');
    $modalWrapper.css('display', 'none');
    $mainContent.attr('aria-hidden', 'false');
    $modalTrigger.focus();
    $mainContent.off('.modalOpen');
  });
}

function deflectFocus() {
    'use strict';
  $mainContent.on('focusin.modalOpen', function(e) {
    $modalClose.focus();
  });
}

setModalButton();
setModalClose();
/**
* Main JS file for Casper behaviours
*/

/*globals jQuery, document */
(function ($) {
  "use strict";

  $(document).ready(function () {
    var qrcode;

    $(".post-content").fitVids();
    
    // Calculates Reading Time
    $('.post-content').readingTime({
        readingTimeTarget: '.post-reading-time',
        wordCountTarget: '.post-word-count',
    });
    
    // Creates Captions from Alt tags
    $(".post-content img").each(function () {
        // Let's put a caption if there is one
        if($(this).attr("alt"))
          $(this).wrap('<figure class="image"></figure>')
          .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
    });

    $('.js-qrcode').each(function () {
      qrcode = new QRCode($(this).attr('id'), {
        text: $(this).data('url'),
        width: 80,
        height: 80,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    });
  });
}(jQuery));
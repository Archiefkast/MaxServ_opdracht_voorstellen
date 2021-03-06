// Use strict mode for better error report
"use strict";

$(document).ready(function () {

  // Store the youtube video url in a variable when a modal has been closed
  $(function () {
    $(".modal").on("hidden.bs.modal", function (e) {
      var videoPlayer = $(this).find("iframe");
      videoPlayer.attr("src", videoPlayer.attr("src"));

      // Pause the audioplayer when a modal has been closed
      var audioPlayer = $(this).find("audio")[0];
      if ($(this).find("audio").length > 0) {
        audioPlayer.pause();
      }
    });
  });

  // make the scroll to top button visible after 100px, hide it when it's back on top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });

  $("#btn__navmenu--toggle").on('click', function () {
    $(".navbar").toggleClass("navbar--show");
  });

  $(".navmenu__item").on('click', function () {
    $(".navbar").removeClass("navbar--show");
  });

});
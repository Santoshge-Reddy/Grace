$(document).ready(function() {
  $(".logo").hover(function() {
    $('.background').addClass('blur');
    $('.circle1').removeClass('hidden');
    $('.level').removeClass('hidden');
    $('.menu').removeClass('show');
    $('.mainPointer').removeClass('speed-1');
    $('.mainPointer').addClass('speed-2');



    sound.play();
  },
  function () {
    $('.background').removeClass('blur');
    $('.circle1').addClass('hidden');
    $('.level').addClass('hidden');
    $('.menu').addClass('show');
    $('.mainPointer').addClass('speed-1');
    $('.mainPointer').removeClass('speed-2');
    sound.pause();
  });
});

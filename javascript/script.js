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

<!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5a78739f4b401e45400caf6b/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
<!--End of Tawk.to Script-->

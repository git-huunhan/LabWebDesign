$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
});

$(function() {
  $("#top").on('click', function() {
      $("HTML, BODY").animate({
          scrollTop: 0
      }, 800);
  });
});
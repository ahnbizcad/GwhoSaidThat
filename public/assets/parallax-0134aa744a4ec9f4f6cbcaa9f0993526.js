(function() {
  $(document).ready(function() {
    var aboutPos, aboutSpeedFactor, coverPos, footerHeight, windowHeight;
    footerHeight = $('footer').outerHeight(true);
    windowHeight = $(window).outerHeight(true);
    coverPos = 0;
    $('#cover-bg').css('top', coverPos);
    aboutSpeedFactor = $('#about-bg').data('speed');
    aboutPos = 0;
    $('#about-bg').css('top', aboutPos);
    return $('[data-type="parallax"]').each(function() {
      var initialPos, obj, speedFactor;
      obj = $(this);
      speedFactor = obj.data('speed');
      initialPos = obj.offset().top;
      return (function(obj, speedFactor, initialPos) {
        return $(window).on('scroll', function() {
          var coords, scrolled;
          scrolled = $(window).scrollTop();
          coords = initialPos + (scrolled * speedFactor);
          return obj.css('top', coords + 'px');
        });
      })(obj, speedFactor, initialPos);
    });
  });

}).call(this);

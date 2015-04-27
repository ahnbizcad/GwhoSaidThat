(function() {
  $(document).ready(function() {
    var footerHeight, navHeight, windowHeight;
    navHeight = $('#navbar-affixable-wrapper > #navbar.affixable').outerHeight(true);
    footerHeight = $('footer').outerHeight(true);
    windowHeight = 0;
    return $(window).resize(function() {
      windowHeight = $(window).outerHeight(true);
      $('#navbar-affixable-wrapper > #navbar.affixable').affix({
        offset: {
          top: windowHeight - navHeight
        }
      });
      $('#cover').height(windowHeight - navHeight);
      $('#about').css({
        'min-height': windowHeight - navHeight - footerHeight
      });
      $('.parallax-bg').height(windowHeight);
      return $('#cover-bg').height(windowHeight - navHeight);
    });
  });

}).call(this);

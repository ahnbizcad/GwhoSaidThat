(function() {
  var navOffset;

  navOffset = $('#navbar-affixable-wrapper > #navbar.affixable').height() - 1;

  $(".scrollspy ul li a[href^='#']").on('click', function(event) {
    var target;
    target = this.hash;
    event.preventDefault();
    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 400, function() {
      return window.history.pushState(null, null, target);
    });
  });

}).call(this);

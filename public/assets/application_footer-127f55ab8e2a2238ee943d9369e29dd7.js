(function() {
  $(document).ready(function() {
    return $(window).resize(function() {

      /*
       * Affix #navbar 
      $('#navbar-affixable-wrapper > #navbar.affixable').affix
        offset: { top: $('#navbar-affixable-wrapper > #navbar.affixable').offset().top }
       */
    });

    /*
     * Affix #articles-nav
    
    fromTop    = $('#articles-nav.affixable').offset().top - $('.affixable-wrapper > #articles-nav.affixable').outerHeight(true)
    fromBottom = $('#footer-navbar').outerHeight(true) + $('#about').outerHeight(true) + $('#bookshelf').outerHeight(true) + $('#articles-nav').outerHeight(true)
    
    $('#articles-nav.affixable').affix  
      offset: { top: fromTop, bottom: fromBottom }
    .on 'affix.bs.affix', ->
      $(this).width( $(this).parent().width() )
     */
  });

}).call(this);
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
// PLUGINS
//
//(manifest)



// TREE SUBSTITUTE
//
//  affix after bookshelf for spacing


;

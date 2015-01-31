(function() {
  $(document).ready(function() {
    var navOffset;
    $(window).resize(function() {
      var space;
      return space = $('#cover').height($(window).height() - $('.affixable-wrapper > .affixable').height());
    });

    /*
    coverOffsetFn = ->
      $('.affixable-wrapper > .affixable').offset().top
     */
    $('#cover').height($(window).height() - $('.affixable-wrapper > .affixable').height());
    $('.affixable-wrapper').height($('.affixable-wrapper > .affixable').height());
    $('.affixable-wrapper > .affixable').affix({
      offset: $('.affixable-wrapper > .affixable').offset().top
    });
    navOffset = $('.affixable-wrapper > .affixable').height();
    return $('.navbar li a').click(function(event) {
      event.preventDefault();
      $($(this).attr('href'))[0].scrollIntoView();
      return scrollBy(0, -navOffset);
    });
  });

}).call(this);

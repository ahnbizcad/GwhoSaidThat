(function() {
  $(document).ready(function() {
    $('.affixable-wrapper').height($('.affixable-wrapper > .affixable').height());
    return $('.affixable-wrapper > .affixable').affix({
      offset: {
        top: $('.affixable-wrapper > .affixable').offset().top
      }
    });
  });

}).call(this);

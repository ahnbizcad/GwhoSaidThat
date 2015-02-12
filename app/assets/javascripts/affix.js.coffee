#
# Cover section, navbar, affix
#

$(document).ready ->  
  
  # Windows resize
  #
  # Set and Maintain #cover and #navbar to one screen
  # Recalculate affix-triggering vertical position.
  $(window).resize ->
    
    # Affix #navbar 
    $('#navbar-affixable-wrapper > #navbar.affixable').affix
      offset: { top: $('#navbar-affixable-wrapper > #navbar.affixable').offset().top }    

  ###
  # Affix #articles-nav
  
  fromTop    = $('#articles-nav.affixable').offset().top - $('.affixable-wrapper > #articles-nav.affixable').outerHeight(true)
  fromBottom = $('#footer-navbar').outerHeight(true) + $('#about').outerHeight(true) + $('#bookshelf').outerHeight(true) + $('#articles-nav').outerHeight(true)
  
  $('#articles-nav.affixable').affix  
    offset: { top: fromTop, bottom: fromBottom }
  .on 'affix.bs.affix', ->
    $(this).width( $(this).parent().width() )
  ###
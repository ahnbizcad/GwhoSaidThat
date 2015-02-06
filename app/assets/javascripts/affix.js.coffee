#
# Cover section, navbar, affix
#

$(document).ready ->
  
  # Set and Maintain #cover and #navbar to one page
  #
  $(window).resize ->
    $('#cover').height( $(window).outerHeight() - $('.affixable-wrapper > .affixable').outerHeight() )

  $('#cover').height( $(window).outerHeight() - $('.affixable-wrapper > .affixable').outerHeight() )
  

  # Affix navbar
  #
  $('.affixable-wrapper').outerHeight( $('.affixable-wrapper > .affixable').outerHeight() )
  $('.affixable-wrapper > .affixable').affix
    offset: { top: $('.affixable-wrapper > .affixable').offset().top }

  
  # Affix articles-nav
  #
  fromTop    = $('#articles-nav.affixable').offset().top - 15 - $('.affixable-wrapper > .affixable').outerHeight()
  fromBottom = $('#footer-navbar').outerHeight(true) + $('#about').outerHeight(true) + $('#bookshelf').outerHeight(true) + $('#articles-nav').outerHeight(true) + 15
  
  $('#articles-nav.affixable').affix  
    offset: { top: fromTop, bottom: fromBottom }
  .on 'affix.bs.affix', ->
    $(this).width( $(this).parent().width() )


  # Smooth Scrolling for anchor links.
  #
  # Offset scrollspy target positioning
  navOffset = $('.affixable-wrapper > .affixable').outerHeight()
  #
  $(".bs-js-navbar-scrollspy li a[href^='#']").on 'click', (event) ->
    target = this.hash
    event.preventDefault()
    $('html, body').animate { scrollTop: $(this.hash).offset().top - navOffset }, 300, ->
      window.history.pushState(null,null,target)

#
# Cover section, navbar, affix
#

$(document).ready ->

  # Maintain cover image height of one screen.
  #
  $(window).resize ->
    $('#cover').height( $(window).outerHeight() - $('.affixable-wrapper > .affixable').outerHeight() )
  

  # Affix navbar
  #
  $('#cover').height( $(window).outerHeight() - $('.affixable-wrapper > .affixable').outerHeight() )

  $('.affixable-wrapper').outerHeight( $('.affixable-wrapper > .affixable').outerHeight() )
  $('.affixable-wrapper > .affixable').affix
    offset: { top: $('.affixable-wrapper > .affixable').offset().top }

  
  # Affix articles-nav
  #
  fromTop    = $('#articles-nav.affixable').offset().top - 15 - $('.affixable-wrapper > .affixable').outerHeight()
  fromBottom = $('#footer-navbar').outerHeight() + $('#about').outerHeight() + $('#bookshelf').outerHeight() + $('#articles-nav').outerHeight()
  $('#articles-nav.affixable').affix  
    offset: { top: fromTop, bottom: fromBottom }
  .on 'affix.bs.affix', ->
    $(this).width()


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

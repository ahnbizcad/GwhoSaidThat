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
  topPos    = $('#articles-nav.affixable').offset().top - 15 - $('.affixable-wrapper > .affixable').height()
  bottomPos = $('footer').outerHeight() + $('#about').outerHeight() + $('#bookshelf').outerHeight() + $('#articles-nav').outerHeight(true) + 2 * $('#navbar').outerHeight()
  $('#articles-nav.affixable').affix  
    offset: { top: topPos, bottom: bottomPos }
  .on 'affix-bottom.bs.affix', ->
    #$(this).css('bottom', 'auto')


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

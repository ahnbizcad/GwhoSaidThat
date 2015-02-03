#
# Cover section, navbar, affix
#

$(document).ready ->

  # Maintain cover image height of one screen.
  #
  $(window).resize ->
    $('#cover').height( $(window).height() - $('.affixable-wrapper > .affixable').height() )
  

  # Affix navbar
  #
  $('#cover').height( $(window).height() - $('.affixable-wrapper > .affixable').height() )

  $('.affixable-wrapper').height( $('.affixable-wrapper > .affixable').height() )
  $('.affixable-wrapper > .affixable').affix
    offset: { top: $('.affixable-wrapper > .affixable').offset().top }

  # Affix 
  # Affix articles-nav
  topPos    = $('#articles-nav.affixable').offset().top - $('.affixable-wrapper > .affixable').height()
  bottomPos = $('#blog').offset().bottom - 10 - $('#articles-nav').height()
  $('#articles-nav.affixable').affix  
    offset: { top: topPos, bottom: bottomPos }


  # Smooth Scrolling for anchor links.
  #
  # Offset scrollspy target positioning
  navOffset = $('.affixable-wrapper > .affixable').height()
  #
  $(".bs-js-navbar-scrollspy li a[href^='#']").on 'click', (event) ->
    target = this.hash
    event.preventDefault()
    $('html, body').animate { scrollTop: $(this.hash).offset().top - navOffset }, 300, ->
      window.history.pushState(null,null,target)

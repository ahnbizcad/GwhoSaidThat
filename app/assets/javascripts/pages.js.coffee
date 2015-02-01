# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#
# Cover Page & Navbar
#

$(document).ready ->

  # Maintain cover image height of one screen.
  #
  $(window).resize ->
    space = $('#cover').height( $(window).height() - $('.affixable-wrapper > .affixable').height() )
  

  # Affix
  #
  $('#cover').height( $(window).height() - $('.affixable-wrapper > .affixable').height() )
  
  $('.affixable-wrapper').height( $('.affixable-wrapper > .affixable').height() )
  $('.affixable-wrapper > .affixable').affix
    offset: $('.affixable-wrapper > .affixable').offset().top


  # Smooth Scrolling for anchor links,.
  #
  # Offset scrollspy target positioning
  navOffset = $('.affixable-wrapper > .affixable').height()
  #
  $(".bs-js-navbar-scrollspy li a[href^='#']").on 'click', (event) ->
    target = this.hash
    event.preventDefault()
    $('html, body').animate { scrollTop: $(this.hash).offset().top - navOffset }, 300, ->
      window.history.pushState(null,null,target)

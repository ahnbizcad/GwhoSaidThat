# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#
# Cover Page & Navbar
#

$(document).ready ->

  # Keep cover page 1 window's height, including navbar 
  $(window).resize ->
    space = $('#cover').height( $(window).height() - $('.affixable-wrapper > .affixable').height() )
  

  # Affix 
  ###
  coverOffsetFn = ->
    $('.affixable-wrapper > .affixable').offset().top
  ###
  $('#cover').height( $(window).height() - $('.affixable-wrapper > .affixable').height() )
  
  $('.affixable-wrapper').height( $('.affixable-wrapper > .affixable').height() )
  $('.affixable-wrapper > .affixable').affix
    offset: $('.affixable-wrapper > .affixable').offset().top


  # Offset scrollspy target positioning
  navOffset = $('.affixable-wrapper > .affixable').height()

  $('.navbar li a').click (event) ->
    event.preventDefault()
    $($(this).attr('href'))[0].scrollIntoView()
    scrollBy(0, -navOffset)


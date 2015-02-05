
# Maintain .parallax height of one screen.
#
$(window).resize ->
  $('.parallax').height( $(window).outerHeight() )
$(document).ready ->

  # Set initial positions for backgrounds
  coverPos = 0
  $('#cover-bg').css('top', coverPos)

  # 0 moves completely with flow (slower)
  # 1 stays completely static    (faster)
  speedfactor = 0.8
  # parallax speec control
  parallax = -> 
    scrolled = $(window).scrollTop()  

    $('.parallax-bg').css('top', coverPos + (scrolled * speedfactor) + 'px')

#    
# Call functions
#

  $(window).on 'scroll', ->
    parallax()

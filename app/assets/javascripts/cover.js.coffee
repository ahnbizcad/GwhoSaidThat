###$(document).ready ->
  # Dim cover page as you scroll down.
    
  maxOpacity = 0.8

  controlOpacity = (currentPos)->
    if (currentPos <= windowHeight)
      currentOpacity = maxOpacity * (currentPos / windowHeight)
    else
      currentOpacity = maxOpacity


  $(window).on 'scroll', ->
    scrolled = rgba(255,255,255, currentOpacity)
    controlOpacity()
    
###
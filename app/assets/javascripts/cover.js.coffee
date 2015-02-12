###$(document).ready ->
  
  maxOpacity = 0.8

  controlOpacity = (currentPos)->
    if (currentPos <= windowHeight)
      currentOpacity = maxOpacity * (currentPos / windowHeight)
    else
      currentOpacity = maxOpacity

    #$('#cover').css('background-color', 'rgba(255,255,255, currentOpacity)')

  $(window).on 'scroll', ->
    scrolled = rgba(255,255,255, currentOpacity)
    controlOpacity()
    
###
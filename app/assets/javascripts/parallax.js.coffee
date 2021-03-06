$(document).ready ->

  footerHeight = $('footer').outerHeight(true)
  windowHeight = $(window).outerHeight(true)

  # Set initial positions for backgrounds
  coverPos = 0
  $('#cover-bg').css('top', coverPos)

  aboutSpeedFactor = $('#about-bg').data('speed')
  #aboutPos = (windowHeight) * (1 - aboutSpeedFactor) # generic formula
  aboutPos = 0
  $('#about-bg').css('top', aboutPos)


  $('[data-type="parallax"]').each ->

    obj = $(this)

    # multiplied factor of "in-flow" speed
    # 0 moves completely in-flow  (moves faster)
    # 1 stays completely static   (moves slower)    
    speedFactor = obj.data('speed')  

    initialPos = obj.offset().top

    do (obj, speedFactor, initialPos) ->
      # apply parallax speed
      $(window).on 'scroll', ->

        scrolled = $(window).scrollTop()    # Does this execute for every object? Only need this once regadrless of object count.
        
        coords = initialPos + (scrolled * speedFactor)
        obj.css('top', coords + 'px')

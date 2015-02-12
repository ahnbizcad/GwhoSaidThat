# Windows resize
#
# Set and Maintain #cover and #navbar to one screen
# Recalculate affix-triggering vertical position.
$(document).ready ->

#
# reused values
#

  # Get unchanging heights
  navHeight = $('#navbar-affixable-wrapper > #navbar.affixable').outerHeight()

#
# initial settings
#



#
# resize settings
#

  # Sets initial size on page load also.
  $(window).resize ->

    # Changing heights
    windowHeight = $(window).height()
    windowMinusNavHeight = windowHeight - navHeight


    # Section background heights
    $('#cover').height( windowMinusNavHeight )
    #$('.spacer').css('height': windowMinusNavHeight )


    # Affix navbar
    $('#navbar-affixable-wrapper > #navbar.affixable').affix
      offset: { top: windowMinusNavHeight }


    # Parallax heights
    $('#cover-bg').height( windowMinusNavHeight )

    # Parallax positions

    #coverBgPos = 0
    
          ## Ensure parallax background shows up at the right place when window size changes.
          #$('.parallax-b').height( windowHeight * 1.5 )
          #
          #bgPosCover = 0
          #$('#cover-bg').css('top': bgPosCover)
          #
          #bgPosWorks     = windowHeight * scaleFactor
          #$  slowfactor = 0.5('#works-bg').css('top': bgPosWorks)
          #
          #bgPosBlog      = bgPosWorks + $('#blog').height() * scaleFactor
          #$('#blog-bg').css('top': bgPosBlog)
          #
          #bgPosBookshelf = bgPosBlog + $('#bookshelf').height() * scaleFactor
          #$('#bookshelf-bg').css('top': bgPosBookshelf)

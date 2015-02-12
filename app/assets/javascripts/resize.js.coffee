# Windows resize
#
# Set and Maintain #cover and #navbar to one screen
# Recalculate affix-triggering vertical position.
$(document).ready ->

#
# reused values
#

  # Get heights
  navHeight = $('#navbar-affixable-wrapper > #navbar.affixable').outerHeight()

#
# initial settings
#



#
# resize settings
#

  # Sets initial size on page load also.
  $(window).resize ->

    # Heights of navbar and window
    windowHeight = $(window).height()    
    windowMinusNavHeight = windowHeight - navHeight


    # Section background heights
    $('#cover').height( windowMinusNavHeight - 1 )
    #$('.spacer').css('height': windowMinusNavHeight )


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

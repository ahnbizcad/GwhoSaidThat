# Windows resize
#
# Set and Maintain #cover and #navbar to one screen
# Recalculate affix-triggering vertical position.
$(document).ready ->

  #
  # reused values
  #

  # Make variables available globally.
  # Any declared values here will also initially be overridden by resize when loading.
  navHeight = $('#navbar-affixable-wrapper > #navbar.affixable').outerHeight(true)
  footerHeight = $('footer').outerHeight(true)
  windowHeight = 0

  #
  # initial settings
  #



  #
  # resize settings
  #

  # Sets initial size on page load also.
  $(window).resize ->

    # Changing heights
    windowHeight = $(window).outerHeight(true)    


    # Affix navbar
    $('#navbar-affixable-wrapper > #navbar.affixable').affix
      offset: { top: windowHeight - navHeight }


    # Section background heights
    $('#cover').height( windowHeight - navHeight )
    $('#about').css('min-height': windowHeight - navHeight - footerHeight )


    # Parallax heights
    $('.parallax-bg').height( windowHeight )
    $('#cover-bg').height( windowHeight - navHeight )


    # Parallax positions

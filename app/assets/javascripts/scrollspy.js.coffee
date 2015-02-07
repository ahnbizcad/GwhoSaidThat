# Smooth Scrolling for anchor links.
#

# Offset scrollspy target positioning
navOffset = $('#navbar-affixable-wrapper > #navbar.affixable').height() - 1

$(".scrollspy ul li a[href^='#']").on 'click', (event) ->
  target = this.hash
  event.preventDefault()
  $('html, body').animate { scrollTop: $(this.hash).offset().top - navOffset }, 400, ->
    window.history.pushState(null,null,target)

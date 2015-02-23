$(document).ready ->
  $('.app').on 'mouseenter', ->
    $(this).find('.app-name').addClass('active')
    $(this).find('.app-image img').addClass('active')
  .on 'mouseleave', ->
    $(this).find('.app-name').removeClass('active')
    $(this).find('.app-image img').removeClass('active')

  $('.modal-exit').on 'click', ->
    $('.modal').modal("hide")

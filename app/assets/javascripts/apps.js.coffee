$(document).ready ->
  $('.app').on 'mouseover', ->
    $(this).find('.app-name').addClass('active')
    $(this).find('.app-image').addClass('active')
  .on 'mouseout', ->
    $(this).find('.app-name').removeClass('active')
    $(this).find('.app-image').removeClass('active')

  $('.modal-exit').on 'click', ->
    $('.modal').modal("hide")

$(document).ready ->
  $('.app').on 'mouseenter', ->
    $(this).addClass('active')
  .on 'mouseleave', ->
    $(this).removeClass('active')

  $('.modal-exit').on 'click', ->
    $('.modal').modal("hide")

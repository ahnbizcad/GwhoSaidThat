(function() {
  $(document).ready(function() {
    $('.app').on('mouseenter', function() {
      return $(this).addClass('active');
    }).on('mouseleave', function() {
      return $(this).removeClass('active');
    });
    return $('.modal-exit').on('click', function() {
      return $('.modal').modal("hide");
    });
  });

}).call(this);

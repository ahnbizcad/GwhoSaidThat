(function() {
  $(document).ready(function() {
    $('.app').on('mouseenter', function() {
      $(this).find('.app-name').addClass('active');
      return $(this).find('.app-image img').addClass('active');
    }).on('mouseleave', function() {
      $(this).find('.app-name').removeClass('active');
      return $(this).find('.app-image img').removeClass('active');
    });
    return $('.modal-exit').on('click', function() {
      return $('.modal').modal("hide");
    });
  });

}).call(this);

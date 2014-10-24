(function() {
  jQuery(document).ready(function() {
    return $.bookshelfSlider('#bookshelf_slider', {
      'item_width': '100%',
      'item_height': 320,
      'products_box_margin_left': 30,
      'product_title_textcolor': '#ffffff',
      'product_title_bgcolor': '#c33b4e',
      'product_margin': 20,
      'product_show_title': true,
      'show_title_in_popup': true,
      'show_selected_title': true,
      'show_icons': true,
      'buttons_margin': 15,
      'buttons_align': 'center',
      'slide_duration': 800,
      'slide_easing': 'easeOutQuart',
      'arrow_duration': 800,
      'arrow_easing': 'easeInOutQuart',
      'video_width_height': [500, 290],
      'iframe_width_height': [500, 330]
    });
  });

}).call(this);

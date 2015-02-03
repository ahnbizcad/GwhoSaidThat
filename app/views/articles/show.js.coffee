$('#article').html("<%= j(render partial: "articles/article", locals: { article: @article }) %>")

$('#articles-nav li').removeClass('active')
$(this).parent().addClass('active')

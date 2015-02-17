$('#article').html("<%== j(render partial: "articles/article", locals: { article: @article }) %>")

$('#articles-nav li.active').removeClass('active')
$('#articles-nav li#article-<%= @article.id %>').addClass('active')

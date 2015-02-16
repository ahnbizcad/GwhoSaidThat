$('#article').html("<%== j(render partial: "articles/article", locals: { article: @article }) %>")

$('#articles-nav li').removeClass('active')
$('#article-<%= @article.id %>').addClass('active')

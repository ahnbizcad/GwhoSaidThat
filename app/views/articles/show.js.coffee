$('#article').html("<%= j(render partial: "articles/article", locals: { article: @article }) %>")

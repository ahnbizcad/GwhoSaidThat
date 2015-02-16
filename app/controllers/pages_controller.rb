class PagesController < ApplicationController

  def home
    @apps     = App.all
    @articles = Article.all.by_newest
    @first_available_article = currently_admin?  Article.first : Article.published.first
    @books    = Book.all

    # Refactor to use ajax lazy load from the plugin javascript.
    @programming_books = Book.by_category("programming")
    @business_books    = Book.by_category("business")
    @science_books     = Book.by_category("science")
    @philosophy_books  = Book.by_category("philosophy")
    @to_read_books     = Book.by_category("to read")
  end
  
end

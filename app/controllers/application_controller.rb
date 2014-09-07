class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :app_count
  before_action :article_count
  
  private
    def authorize_admin
      redirect_to root_path, alert: 'Access Denied' unless current_user.admin?
    end

    def app_count
      @app_count = App.count
    end

    def article_count
      @article_count = Article.count
    end

end

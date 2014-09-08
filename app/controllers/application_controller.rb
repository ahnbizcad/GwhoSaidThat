class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :app_count
  before_action :article_count
  #before_action :verbs
  before_action :current_verb
  
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

    #def verbs
    #  @verbs = %w(MADE, TAUGHT, THOUGHT, PLAYS) # Hash matching key to verb?
    #end

    def current_verb

      case params[:controller]
      when "apps"
        @current_verb = "MADE "
      when "articles"
        @current_verb = "TAUGHT "
      when "articles"
        @current_verb = "WONDERED " # Change later to specify articles with a certain tag.
      else
        @current_verb = "IS "
      end
    end

end

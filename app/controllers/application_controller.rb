class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

#  VERBS = { pages: "IS",
#            apps: "MADE",
#            articles: "LEARNED",
#            books: "READ",
#          }.stringify_keys#.freeze #see http://m.onkey.org/ruby-i-don-t-like-3-object-freeze
#
#  before_action :verbs
#  before_action :set_current_verb
#
#  before_action :published_apps_count
#  before_action :unpublished_apps_count, if: :user_signed_in?
#  
#  before_action :published_articles_count
#  before_action :unpublished_articles_count, if: :user_signed_in?
#  
#  before_action :published_books_count
#  before_action :unpublished_books_count, if: :user_signed_in?

  ## Inject the passed in path_prefixes to the the partials lookup path just before 'application' so that templates can "inherit" partially from other portals/paths as well.
  ## See: stackoverflow.com/questions/…
  ## An example scenario, using `inject_template_inheritance_path_prefixes('public/base')` in a MemberPortal controller
  ## Before: ["member_portal/<controller_name>", "member_portal/base", "application"]
  ## After: ["member_portal/<controller_name>", "member_portal/base", "public/base", "application"]
  #def self.inject_template_inheritance_path_prefixes(*args)
  #options = args.extract_options!
  #define_method '_prefixes' do
  #return super() unless Array.wrap(options[:only]).include?(params[:action]) if options.key?(:only)
  #return super() unless Array.wrap(options[:except]).exclude?(params[:action]) if options.key?(:except)
  #prefixes = super()
  #args.each do |path_prefix|
  #prefixes[prefixes.size] = prefixes[-1]
  #prefixes[-2] = path_prefix
  #end
  #@_prefixes_with_partials = prefixes
  #end
  #end
  
  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end
    
  protected

    # Devise strong parameters
    #def configure_permitted_parameters
    #  devise_parameter_sanitizer.for(:sign_in)        { |u| u.permit(:email, :password) }
    #  devise_parameter_sanitizer.for(:sign_up)        { |u| u.permit(:email, :password, :password_confirmation) }
    #  devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:email, :password, :password_confirmation, :current_password) }
    #end

    def currently_admin?
      if user_signed_in?
        current_user.admin? ? true : false
      else
        false
      end
    end
    helper_method :currently_admin?

    def authorize_admin
      redirect_to root_path unless currently_admin? and return
      return
    end

#    def verbs
#      @verbs = VERBS
#    end
#
#    def set_current_verb
#      @current_verb = VERBS.fetch(controller_name) { "IS" }
#    end
#
#    class << self
#      VERBS.each do |models, verb|
#
#        define_method "unpublished_#{models}_count" do
#          instance_variable_set("@unpublished_#{@models}_count", models.singularize.constantize.unpublished.size)
#        end
#
#        define_method "published_#{models}_count" do
#          instance_variable_set("@published_#{@models}_count", models.singularize.constantize.published.size)
#        end
#
#      end
#    end
#
#    def published_apps_count
#      @published_apps_count = App.published.size
#    end
#
#    def unpublished_apps_count
#      @unpublished_apps_count = App.unpublished.size
#    end
#
#    def published_articles_count
#      @published_articles_count = Article.published.size
#    end
#
#    def unpublished_articles_count
#      @unpublished_articles_count = Article.unpublished.size
#    end
#
#    def published_books_count
#      @published_books_count = Book.published.size
#    end
#
#    def unpublished_books_count
#      @unpublished_books_count = Book.unpublished.size
#    end
  
end

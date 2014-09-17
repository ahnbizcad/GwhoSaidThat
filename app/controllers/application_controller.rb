class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  VERBS = { pages: "IS",
            apps: "MADE",
            articles: "LEARNED"
          }.stringify_keys#.freeze #see http://m.onkey.org/ruby-i-don-t-like-3-object-freeze

  before_action :app_count
  before_action :article_count

  before_action :set_current_verb
  

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

    def verbs
      @verbs = VERBS
    end

    def set_current_verb
      @current_verb = VERBS.fetch(controller_name) { "IS" }
    end

end

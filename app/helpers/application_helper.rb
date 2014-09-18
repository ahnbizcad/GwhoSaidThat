module ApplicationHelper

  def currently_admin?
    if user_signed_in?
      current_user.admin? ? true : false
    else
      false
    end
  end

  # Redcarpet
  #def markdown(text)
  #  options = [:hard_wrap, :filter_htm, :autolink, :no_intraemphasis, :fenced_code_blocks, :gh_blockcode]
  #  Redcarpet.new(text, *options).to_html.html)safe
  #end

end

module ApplicationHelper

  def currently_admin?
    if user_signed_in?
      current_user.admin? ? true : false
    else
      false
    end
  end

# Code Parsing


  #require 'coderay'
  #def coderay(text)
  #  text.gsub(/\<code( lang="(.+?)")?\>(.+?)\<\/code\>/m) do
  #    CodeRay.scan($3, $2).div(line_numbers: :table)
  #    #, :css => :class)
  #  end
  #end

end

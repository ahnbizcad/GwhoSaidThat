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

  #def coderay(text) 
  #  text.gsub!(/\<code(?: lang="(.+?)")?\>(.+?)\<\/code\>/m) do 
  #    code = CodeRay.scan($2, $1).div(:css => :class) 
  #    "<notextile>#{code}</notextile>" 
  #  end 
  #  return text.html_safe 
  #end
  require 'coderay'

  def coderay(text)
    text.gsub(/\<code( lang="(.+?)")?\>(.+?)\<\/code\>/m) do
      content_tag("notextile", CodeRay.scan($3, $2).div(:css => :class))
    end
  end

  #def coderay(text, lang)
  #  text.gsub(/\<pre( lang="(.+?)")?\>\<code( lang="(.+?)")?\>(.+?)\<\/code\>\<\/pre\>/m) do
  #    lang = $4
  #    text = CGI.unescapeHTML($5).gsub /\<code( lang="(.+?)")?\>|\<\/code\>/, ""
  #    CodeRay.scan(text, lang).div(:line_numbers => :table, :css => :class)
  #  end
  #end

end

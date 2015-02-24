class FlashMapper

  def self.for_bootstrap(word)
    word = word.to_sym

    case word
    when :error
      "danger"  # red
    when :notice
      "warning" # yellow
    when :alert
      "info"    # blue
    when :success
      "success" # green
    else
      word.to_s
    end
  end

  def self.for_display(word)
    word = word.to_sym

    case word
    when :error
      "error"
    when :notice
      "warning"
    when :alert
      "info"  
    when :success
      "success"
    else
      word.to_s
    end
  end

end
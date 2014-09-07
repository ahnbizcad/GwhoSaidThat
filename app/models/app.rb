# == Schema Information
#
# Table name: apps
#
#  id          :integer          not null, primary key
#  created_at  :datetime
#  updated_at  :datetime
#  url         :string(255)
#  description :text
#

class App < ActiveRecord::Base
  def self.class_method
    "hi"
  end

  def neat_url
    URI(self.url).host
  end

end

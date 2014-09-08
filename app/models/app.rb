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

  scope :by_newest, -> { order("created_at DESC") }

  def neat_url
    URI(self.url).host
  end

end

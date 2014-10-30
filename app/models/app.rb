# == Schema Information
#
# Table name: apps
#
#  id          :integer          not null, primary key
#  created_at  :datetime
#  updated_at  :datetime
#  url         :string(255)
#  description :text
#  published   :boolean          default(FALSE)
#  image_path  :string(255)
#

class App < ActiveRecord::Base
  default_scope { order("created_at DESC") }
  scope :by_newest, -> { order("created_at DESC") }
  scope :unpublished, -> { where("published = False") }
  scope :published, -> { where("published = True") } 

  def neat_url
    URI(self.url).host
  end

end

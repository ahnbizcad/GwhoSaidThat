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
#  name        :string(255)      default(""), not null
#

class App < ActiveRecord::Base

  scope :by_newest,   -> { order("created_at DESC") }
  scope :unpublished, -> { where("published = False") }
  scope :published,   -> { where("published = True") } 

  validates :name, format: { with: // }

  def neat_url
    encoded_url = URI.encode(self.url)
    URI.parse(encoded_url).host
  end

end

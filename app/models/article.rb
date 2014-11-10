# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  image_url  :string(255)
#  title      :string(255)
#  content    :text
#  published  :boolean          default(FALSE)
#

class Article < ActiveRecord::Base

  scope :by_newest,   -> { order("created_at DESC") }
  scope :unpublished, -> { where("published = False") }
  scope :published,   -> { where("published = True") } 

end

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
  before_validation :titleize_title

  scope :published, -> { where("published = True") }
  scope :by_newest, -> { order("created_at DESC") }

  def titleize_title
    self.title = self.title.titleize
  end

end

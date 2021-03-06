# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  author     :string(255)
#  url        :string(255)
#  review     :text
#  created_at :datetime
#  updated_at :datetime
#  published  :boolean          default(FALSE)
#  category   :string(255)
#  image_path :string(255)
#

class Book < ActiveRecord::Base

  scope :by_newest,   -> { order("created_at DESC") }
  scope :unpublished, -> { where("published = False") }
  scope :published,   -> { where("published = True") } 

# Callback definitions.


# Scope definitions.

  def self.by_category(category)
    where(category: category)
  end

end

# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  image      :string(255)
#  title      :string(255)
#  content    :text
#

class Article < ActiveRecord::Base
end

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

require 'faker'

FactoryGirl.define do
  factory :article do
    
  end
end

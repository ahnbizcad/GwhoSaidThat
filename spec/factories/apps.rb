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
#  position    :integer
#

require 'faker'

FactoryGirl.define do
  factory :app do |f|
    f.url         Faker::Internet.url
    f.description Faker::Lorem.paragraph(2)
    f.published   true
    f.image_path  "Doe"
    #Faker::Lorem.words returns array, but the :name attribute needs to be a string.
    f.name        Faker::Lorem.words(2)[0..2].to_s
    f.position    Faker::Number.digit
  end
end

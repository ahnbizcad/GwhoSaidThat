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
#

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

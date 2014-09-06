# == Schema Information
#
# Table name: apps
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  url        :string(255)
#

class App < ActiveRecord::Base
end

class AddPositionToApps < ActiveRecord::Migration
  def change
    add_column :apps, :position, :integer
  end
end

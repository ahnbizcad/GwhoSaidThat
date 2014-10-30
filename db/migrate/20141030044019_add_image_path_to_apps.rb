class AddImagePathToApps < ActiveRecord::Migration
  def change
    add_column :apps, :image_path, :string
  end
end

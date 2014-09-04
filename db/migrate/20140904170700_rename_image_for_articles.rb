class RenameImageForArticles < ActiveRecord::Migration
  def change
    rename_column :articles, :image, :image_url
  end
end

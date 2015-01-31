class ChangeNameColumnToApps < ActiveRecord::Migration
  def change
  	change_column :apps, :name, :string, :default => "", :null => false
  end
end

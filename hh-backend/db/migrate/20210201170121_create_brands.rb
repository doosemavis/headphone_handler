class CreateBrands < ActiveRecord::Migration[6.0]
  def change
    create_table :brands do |t|
      t.string :name
      t.integer :headphone_id
      
      t.timestamps
    end
  end
end

class CreateHeadphones < ActiveRecord::Migration[6.0]
  def change
    create_table :headphones do |t|
      t.string :name
      t.integer :price
      t.integer :weight
      t.string :description
      t.boolean :in_stock

      t.timestamps
    end
  end
end

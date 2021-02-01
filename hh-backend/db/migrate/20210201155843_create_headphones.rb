class CreateHeadphones < ActiveRecord::Migration[6.0]
  def change
    create_table :headphones do |t|
      t.string :name
      t.decimal :price, precision: 5, scale: 2
      t.decimal :weight, precision: 5, scale: 2
      t.string :description
      t.boolean :in_stock

      t.timestamps
    end
  end
end

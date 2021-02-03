class HeadphoneSerializer < ActiveModel::Serializer 
    attributes :id, :name, :price, :weight, :description, :in_stock, :brand_id
    belongs_to :brand 
end 
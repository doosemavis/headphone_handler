class HeadphoneSerializer < ActiveModel::Serializer 
    attributes :id, :name, :price, :weight, :description, :in_stock
    belongs_to :brand 
end 
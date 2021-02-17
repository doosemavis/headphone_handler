class Headphone < ApplicationRecord
    belongs_to :brand
    validates :name, :price, presence: true
end

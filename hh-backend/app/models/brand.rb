class Brand < ApplicationRecord
    has_many :headphones
    validates :name, presence: true
end

class Headphone < ApplicationRecord
    has_many :brands
    has_many :categories
end

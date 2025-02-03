class AnimalSittingBooking < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :animal_name, presence: true
    validates :animal_type, presence: true
    validates :service_hours, presence: true
    validates :service_date, presence: true
    validates :service_cost, presence: true
end
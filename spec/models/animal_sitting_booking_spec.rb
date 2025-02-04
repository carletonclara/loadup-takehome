require 'rails_helper'

RSpec.describe AnimalSittingBooking, type: :model do
  let (:valid_booking) do
    AnimalSittingBooking.create(
        first_name: 'clara',
        last_name: 'carleton',
        animal_name: 'snowball',
        animal_type: 'cat',
        service_hours: 3,
        service_cost: 35,
        service_date: Date.new(2001,2,3)
      )
  end

  let (:invalid_booking) do
    AnimalSittingBooking.create(
        first_name: 'clara'
    )
  end

  context 'an animal sitting booking with all params' do
    it "is valid" do
      expect(valid_booking).to be_valid
    end
  end

  context 'an animal sitting booking with missing params' do
    it "is invalid" do
      expect(invalid_booking).not_to be_valid
    end
  end
end

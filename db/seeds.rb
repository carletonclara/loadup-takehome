# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

10.times do |n|
    first_name  = Faker::Name.name
    last_name  = Faker::Name.name
    animal_name = Faker::Name.name
    animal_types = ["cat", "dog", "pig"]
    hours = (2..8).to_a.sample
    AnimalSittingBooking.create!(
                first_name:     first_name,
                last_name:      last_name,
                animal_name:    animal_name,
                animal_type:    animal_types.sample,
                service_date:   Time.now,
                service_hours:  hours,
                service_cost:   10,
    )
end
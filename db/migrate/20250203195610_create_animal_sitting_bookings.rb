class CreateAnimalSittingBookings < ActiveRecord::Migration[8.0]
  def up
    create_table :animal_sitting_bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :animal_name
      t.string :animal_type
      t.integer :service_hours
      t.integer :service_cost
      t.datetime :service_date
      t.timestamps
    end
  end

  def down
    drop_table :animal_requests
  end
end

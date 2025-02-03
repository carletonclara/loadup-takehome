class AnimalSittingController < ApplicationController
  
    def index
    end

    def bookings
      @bookings = AnimalSittingBooking.all
    end
  end
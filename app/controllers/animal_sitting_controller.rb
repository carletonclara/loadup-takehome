class AnimalSittingController < ApplicationController
  
    def form
    end

    def bookings
      @bookings = AnimalSittingBooking.all
    end

    def create
      @request = AnimalSittingBooking.new(
          first_name: params[:first_name],
          last_name: params[:last_name],
          animal_name: params[:animal_name],
          animal_type: params[:animal_type],
          service_hours: params[:service_hours],
          service_date: params[:service_date],
          service_cost: 0
      )

      binding.pry

      if @request.save!
        render json: @request, status: :created
      else
          render json: {}, status: :bad_request
      end
    end
  end
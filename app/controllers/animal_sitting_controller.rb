class AnimalSittingController < ApplicationController
  
    def form
    end

    def bookings
      @bookings = AnimalSittingBooking.all
    end

    def create
      cost = calculate_cost(params)

      @request = AnimalSittingBooking.new(
          first_name: params[:first_name],
          last_name: params[:last_name],
          animal_name: params[:animal_name],
          animal_type: params[:animal_type],
          service_hours: params[:service_hours],
          service_date: params[:service_date],
          service_cost: cost
      )

      if @request.save!
        render json: @request, status: :created
      else
          render json: {}, status: :bad_request
      end
    end

    private

    def calculate_cost(params)
        if !params[:service_hours].nil? && !params[:animal_type].nil?
            return CostService.new(params[:service_hours], params[:animal_type]).calculate_cost
        else 
            raise "missing params"
        end
    end
  end
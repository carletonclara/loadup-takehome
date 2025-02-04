class AnimalSittingController < ApplicationController
  
    def index
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
          service_cost: params[:service_cost]
      )

      if @request.save!
        render json: @request, status: :created
      else
          render json: {}, status: :bad_request
      end
    end

    def calculate_cost
        if !params[:service_hours].nil? && !params[:animal_type].nil?
            cost = CostService.new(params[:service_hours], params[:animal_type]).calculate_cost
            render json: { service_cost: cost } , status: :ok
        else 
          render json: {}, status: :bad_request
        end
    end
  end
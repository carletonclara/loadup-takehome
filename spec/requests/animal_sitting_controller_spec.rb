require 'rails_helper'
require 'date'

RSpec.describe "AnimalSittingControllers", type: :request do
  let(:create_valid_params) do
    {
      first_name: 'clara',
      last_name: 'carleton',
      animal_name: 'snowball',
      animal_type: 'cat',
      service_hours: 3,
      service_cost: 35,
      service_date: Date.new(2001,2,3),
    }
  end
  let(:cost_valid_params) do
    {
      animal_type: 'cat',
      service_hours: 3,
    }
  end

  let(:invalid_params) do
    {
      wrong: 'param'
    }
  end

  describe "GET /bookings" do
    context 'when a valid request is made' do
      it 'returns status :ok' do
        get "/bookings"
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create_booking" do
    context 'when a valid request is made' do
      it 'returns status :created' do
        post "/create_booking", :params => create_valid_params

        expect(response).to have_http_status(:created)
      end
    end

    context 'when an invalid request is made with missing params' do
      it 'returns status :created' do
        post "/create_booking", :params => invalid_params

        expect(response).to have_http_status(:unprocessable_content)
      end
    end
  end

  describe "POST /calculate_cost" do
    context 'when a valid request is made' do
      it 'returns status :created' do
        post "/calculate_cost", :params => cost_valid_params

        expect(response).to have_http_status(:ok)
      end
    end

    context 'when an invalid request is made with missing params' do
      it 'returns status :created' do
        post "/calculate_cost", :params => invalid_params

        expect(response).to have_http_status(:bad_request)
      end
    end
  end
end

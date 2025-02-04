require 'rails_helper'

RSpec.describe CostService do
    context '#calculate_cost' do

      context 'success paths' do
        it 'calculates services for cat' do
          cost_service = CostService.new(2, 'cat')

          expect(cost_service.calculate_cost()).to eq(30)
        end

        it 'calculates services for dog' do
          cost_service = CostService.new(2, 'dog')

          expect(cost_service.calculate_cost()).to eq(40)
        end

        it 'calculates services for dog' do
          cost_service = CostService.new(2, 'pig')

          expect(cost_service.calculate_cost()).to eq(60)
        end
      end

      context 'error handling' do
        it 'fails when animal not supported' do
          cost_service = CostService.new(2, 'turtle')

          expect { cost_service.calculate_cost() }.to raise_error('animal not supported')
        end
      end
    end
  end
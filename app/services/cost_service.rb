class CostService
    BASE_COST = 20
    ANIMAL_COSTS = {
        "pig" => 20,
        "dog" => 10,
        "cat" => 5 
     }

     def initialize(hours, animal)
        @hours = hours
        @animal = animal
      end

    def calculate_cost
        if ANIMAL_COSTS.has_key?(@animal)
            BASE_COST + (ANIMAL_COSTS.fetch(@animal) * @hours.to_i)
        else 
            raise 'animal not supported'
        end
    end
end
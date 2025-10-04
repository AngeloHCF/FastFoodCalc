import { useState } from 'react';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import NutritionCalculator from './NutritionCalculator';

function Cart({ isExpanded, setIsExpanded }) {
  const [nutritionGoals, setNutritionGoals] = useState({});
  const toggleWidth = () => setIsExpanded(prev => !prev);

  const nutrientTypeMap = {
    "Protein, g": "RDA",
    "Carbohydrate, g": "RDA",
    "Total fat, ?": "AMDR",
    "Saturated fat, ?": "DG",
    "Calcium, mg": "RDA",
    "Iron, mg": "RDA",
    "Magnesium, mg": "RDA",
    "Phosphorus, mg": "RDA",
    "Zinc, mg": "RDA",
    "Copper, mg": "RDA",
    "Selenium, mg": "RDA",
    "Vitamin A, mg": "RDA",
    "Vitamin E, mg": "RDA",
    "Vitamin D, IU": "RDA",
    "Vitamin C, mg": "RDA",
    "Thiamin, mg": "RDA",
    "Riboflavin, mg": "RDA",
    "Niacin, mg": "RDA",
    "Vitamin B-6, mg": "RDA",
    "Vitamin B-12, mg": "RDA",
    "Folate, mg_DFE": "RDA",
    "Dietary Fiber, g": "AI",
    "Linoleic acid, g": "AI",
    "Linolenic acid, g": "AI",
    "Potassium, mg": "AI",
    "Manganese, mg": "AI",
    "Choline, mg": "AI",
    "Vitamin K, mg": "AI",
    "Sodium, mg": "UL",
  };

  return (
    <div className={`${isExpanded ? 'w-4/3' : 'w-1/3'} transition-all duration-500`}>
      <h2 className="pt-10 pb-5 font-[Poppins] text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">Your Meal</h2>
      <NutritionCalculator onUpdateGoals={setNutritionGoals}/>
      
      <div className="flex h-3/4">
        <div className={`absolute ${isExpanded ? "w-1/3" : "w-1/24" } transition-all duration-500`}>
          <div className="flex">
            <p>poop image</p>
            <p className={`${isExpanded ? "flex" : "hidden" }`}>Here are the meals angelo ate: poop, chicken</p>
          </div>
        </div>

        <div className="absolute w-7/24 px-10 right-0 flex-1 h-5/6 overflow-y-auto">
          {Object.entries(nutritionGoals).map(([ category, items ], index) => (
            <div key={index}>
              <h3 className="font-bold mt-5">{category}</h3>
              {Object.entries(items).map(([ nutrient, target ], i) => (
                <ProgressBar
                  key={i}
                  title={nutrient}
                  value={100}
                  target={target}
                  nutrientType={nutrientTypeMap[nutrient]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer isExpanded={isExpanded} onArrowClick={toggleWidth}/>
    </div>
  );
}

export default Cart;
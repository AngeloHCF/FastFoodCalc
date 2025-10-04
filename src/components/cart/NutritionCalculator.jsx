import { useState, useEffect } from "react";
import nutritionData from "../../data/nutritionData.json";

/**
 * Nutritional goals for each age/sex group
 * RDA (Recommended Dietary Allowance) - Aim to reach this for nutrients like vitamins and minerals. Falling below occasionally isn’t a big deal, but consistently under is not ideal. 
 * AI (Adequate Intake) - Try to meet it; it’s more of a guideline than a strict target
 * UL (Tolerable Upper Intake Level) - Do not exceed this. Going over regularly can be dangerous
 * AMDR (Acceptable Macronutrient Distribution Range) - Stay within this range, not necessarily hitting a specific number
 * https://odphp.health.gov/sites/default/files/2019-09/Appendix-E3-1-Table-A4.pdf
 */

function NutritionCalculator({ onUpdateGoals }) {
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("14-18");

  const handleUpdate = () => {
    if (!sex || !age) return; // do nothing if missing input

    // Get nutrition goals
    const goals = nutritionData[sex]?.[age];
    if (!goals) return;
    onUpdateGoals(goals);
  }

  useEffect(() => {
    handleUpdate();
  }, [sex, age]);

  return (
    <div className="bg-gray-200 flex justify-center gap-2">
      <label htmlFor="sex">Sex:</label>  
      <select value={sex} onChange={((e) => setSex(e.target.value))}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label htmlFor="age">Age:</label>  
      <select value={age} onChange={((e) => setAge(e.target.value))}>
        <option value="1-3">1-3</option>
        <option value="4-8">4-8</option>
        <option value="9-13">9-13</option>
        <option value="14-18">14-18</option>
        <option value="19-30">19-30</option>
        <option value="31-50">31-50</option>
        <option value="51+">51+</option>
      </select>
    </div>
  );
}

export default NutritionCalculator;
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

function BudgetTracker() {

  const {state,remainingBudget,totalExpenses, dispatch } = useBudget();
  const pertentageSpent = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={pertentageSpent}
          styles={buildStyles({
             pathColor: pertentageSpent === 100 ? "#DC2626" : "#3b82f6",
             trailColor: "#f5f5f5",
             textSize: 18,
             textColor: pertentageSpent === 100 ? "#DC2626" : "#3b82f6",
          })}
          text={`${pertentageSpent}%`}
        />
      </div>

      <div className="flex flex-col  justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-3 rounded-md uppercase font-bold text-white text-lg"
          onClick={() => dispatch({ type: "reset-app" })}
        >
          Resetear App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}

export default BudgetTracker;

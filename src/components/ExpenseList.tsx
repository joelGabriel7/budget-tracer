import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseList = () => {
  const {state} = useBudget();
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <div className="mt-10">
       {isEmpty ? (
        <p className="text-center text-2xl font-bold text-gray-600">No hay gastos</p>
       ) : (
        <>
            <p className="text-center text-2xl font-bold text-gray-600 my-5">Listado de Gastos.</p>
            {state.expenses.map(expense => (
                <ExpenseDetails
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </>
       )}
    </div>
  )
}

export default ExpenseList
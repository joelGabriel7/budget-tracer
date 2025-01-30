import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseList = () => {
  const {state} = useBudget();
  const filterExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category===state.currentCategory) : state.expenses;
  const isEmpty = useMemo(() => filterExpenses.length === 0, [filterExpenses]);
  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
       {isEmpty ? (
        <p className="text-center text-2xl font-bold text-gray-600">No hay gastos</p>
       ) : (
        <>
            <p className="text-center text-2xl font-bold text-gray-600 my-5">Listado de Gastos.</p>
            {filterExpenses.map(expense => (
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
import { useMemo, useReducer } from "react"
import { BudgetContext } from './BudgetContextDef';
import { initialBudgetState, budgetReducer } from '../reducers/budget-reducers';


type BudgetProviderProps = {
    children: React.ReactNode
}

// This code sets up a React Context for managing budget state across components
// BudgetContext provides:
// - state: Contains the current budget amount
// - dispatch: Function to update the budget through actions
// BudgetProvider wraps components that need access to budget data
// Uses useReducer to manage state changes through defined actions (add-budget)

export const BudgetProvider = ({children}: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialBudgetState);

  const totalExpenses = useMemo( () => state.expenses.reduce((total, expense)=> expense.amount + total, 0), [state.expenses]);
  const remainingBudget = state.budget - totalExpenses;

    return (
        <BudgetContext.Provider 
        value={{ 
            state, 
            dispatch,
            totalExpenses,
            remainingBudget 
        }}> 
            {children} 
        </BudgetContext.Provider>
    )
}
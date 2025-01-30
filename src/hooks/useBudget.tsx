import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContextDef";

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if (!context) {
        throw new Error('useBudget must be used within a BudgetProvider')
    }
    return context
    /**
     * Custom hook to access the budget context
     * @returns {Object} Budget context containing:
     * - state: Current budget state with budget amount
     * - dispatch: Function to update budget through actions
     * @throws {Error} If used outside of BudgetProvider
     */
}
import { createContext } from "react";
import { BudgetState, BudgetActions } from '../reducers/budget-reducers';

type BudgetContextProp = {
    state: BudgetState,
    dispatch: React.Dispatch<BudgetActions>,
}

export const BudgetContext = createContext<BudgetContextProp | null>(null); 
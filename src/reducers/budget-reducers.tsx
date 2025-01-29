import { v4 as uuidv4 } from 'uuid'
import { DraftExpense, Expense } from "../types"


export type BudgetActions = 
    {type: 'add-budget', payload: {budget:number}} |
    {type: 'show-modal'} |
    {type: 'close-modal'} |
    {type:'add-expense', payload: {expense: DraftExpense}}

export type BudgetState = {
    budget: number
   modal: boolean 
   expenses: Expense[]
}

export const initialBudgetState: BudgetState = {
    budget: 0,
    modal: false,
    expenses: []
}

const createExpense = (expense: DraftExpense): Expense => {
    return {
        ...expense,
        id: uuidv4()
    }
}

export const budgetReducer = (
        state: BudgetState = initialBudgetState, 
        action: BudgetActions
    ): BudgetState => {
    switch (action.type) {
        case 'add-budget':
            return {
                ...state,
                budget: action.payload.budget
            }
        case 'show-modal':
            return {
                ...state,
                modal: true
            }
        case 'close-modal':
            return {
                ...state,
                modal: false
             }
        case 'add-expense': {
            const expense = createExpense(action.payload.expense)
            return {
                ...state,
                expenses: [...state.expenses, expense]
            }
        }
        default:
            return state;
    }   
}
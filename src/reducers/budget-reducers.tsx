import { v4 as uuidv4 } from "uuid";
import { DraftExpense, Expense } from "../types";

export type BudgetActions =
    | { type: "add-budget"; payload: { budget: number } }
    | { type: "show-modal" }
    | { type: "close-modal" }
    | { type: "add-expense"; payload: { expense: DraftExpense } }
    | { type: "remove-expense"; payload: { id: Expense["id"] } }
    | { type: "get-expense-by-id"; payload: { id: Expense["id"] } }
    | { type: "update-expense"; payload: { expense: Expense } };

export type BudgetState = {
    budget: number;
    modal: boolean;
    expenses: Expense[];
    editingId: Expense["id"];
};

export const initialBudgetState: BudgetState = {
    budget: 0,
    modal: false,
    expenses: [],
    editingId: "",
};

const createExpense = (expense: DraftExpense): Expense => {
    return {
        ...expense,
        id: uuidv4(),
    };
};

export const budgetReducer = (
    state: BudgetState = initialBudgetState,
    action: BudgetActions
): BudgetState => {
    switch (action.type) {
        case "add-budget":
            return {
                ...state,
                budget: action.payload.budget,
            };
        case "show-modal":
            return {
                ...state,
                modal: true,
            };
        case "close-modal":
            return {
                ...state,
                modal: false,
                editingId: "",
            };
        case "add-expense": {
            const expense = createExpense(action.payload.expense);
            return {
                ...state,
                expenses: [...state.expenses, expense],
                modal: false,
            };
        }
        case "remove-expense": {
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload.id
                ),
            };
        }
        case "get-expense-by-id": {
            return {
                ...state,
                editingId: action.payload.id,
                modal: true,
            };
        }
        case "update-expense": {
            console.log(state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense));
            return {
                ...state,
                expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
                modal: false,
                editingId: "",
            };
        }
        default:
            return state;
    }
};

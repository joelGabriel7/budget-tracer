import { categories } from "../data/categories";
import { useState } from "react";
import { DraftExpense } from "../types";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/userBudget";

/*
This ExpenseForm component manages an expense form using React state.

The component uses the useState hook to maintain a DraftExpense state object with these fields:
- amount: number - The expense amount
- category: string - The selected category ID
- name: string - Name/description of the expense  
- date: Date - When the expense occurred

The state is updated through controlled form inputs:

1. Name input: Updates expense.name via onChange handler
   setExpense({...expense, name: e.target.value})

2. Amount input: Updates expense.amount via onChange, converting string to number
   setExpense({...expense, amount: Number(e.target.value)}) 

3. Category select: Updates expense.category via onChange (shown in truncated code)
   setExpense({...expense, category: e.target.value})

4. Date picker: Updates expense.date via onChange (shown in truncated code)
   setExpense({...expense, date: value})

The spread operator {...expense} is used to maintain existing state values while updating
just the changed field.
*/

export const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    category: "",
    name: "",
    date: new Date(),
  });

  const [error, setError] = useState<string | null>("");
  const { dispatch } = useBudget();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the form
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    } else {
      //add expense
      dispatch({ type: "add-expense", payload: { expense } });

      // reset state
      setExpense({
        amount: 0,
        category: "",
        name: "",
        date: new Date(),
      });
    }
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center font-black  border-b-4 text-2xl text-gray-500 border-blue-500 py-2">
        Add Expense
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Expense name input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-gray-500 font-bold">
          Expense Name:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Añade el nombre del gasto"
          name="expenseName"
          className="bg-slate-100 p-2"
          value={expense.name}
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
        />
      </div>

      {/* Amount input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="Amount" className="text-gray-500 font-bold">
          Amount:
        </label>
        <input
          type="text"
          id="Amount"
          placeholder="Añade la cantidad del gasto (Ej: 300)"
          name="Amount"
          className="bg-slate-100 p-2"
          value={expense.amount}
          onChange={(e) =>
            setExpense({ ...expense, amount: Number(e.target.value) })
          }
        />
      </div>
      {/* Category select */}
      <div className="flex flex-col gap-2">
        <label htmlFor="Category" className="text-gray-500 font-bold">
          Category:
        </label>
        <select
          id="Category"
          name="Category"
          className="bg-slate-100 p-2"
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date picker */}
      <div className="flex flex-col gap-2">
        <label htmlFor="Amount" className="text-gray-500 font-bold">
          Fecha del gasto:
        </label>
        <DatePicker
          className="bg-slate-100 p-2 border-0"
          onChange={(date) => setExpense({ ...expense, date: date })}
          value={expense.date}
        />
      </div>

      {/* Submit button */}
      <input
        type="submit"
        className="bg-blue-500 text-white p-2 w-full font-bold uppercase rounded-md cursor-pointer"
        value="Add Expense"
      />
    </form>
  );
};

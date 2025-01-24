import { categories } from "../data/categories";

export const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center font-black  border-b-4 text-2xl text-gray-500 border-blue-500 py-2">
        Add Expense
      </legend>

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
        />
      </div>
      {/* Category select */}
      <div className="flex flex-col gap-2">
        <label htmlFor="Category" className="text-gray-500 font-bold">
          Category:
        </label>
        <select id="Category" name="Category" className="bg-slate-100 p-2">
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
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

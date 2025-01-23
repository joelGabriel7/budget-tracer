import { useMemo, useState } from "react";
import { useBudget } from "../hooks/userBudget";

const BudgetForm = () => {
    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget();

    const  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type:"add-budget", payload: {budget}})

    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0;
    },[budget]);
    

    return (
        <>
            <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="flex flex-col space-y-5">
                    <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                        Define un presupuesto
                    </label>
                    <input
                        id="budget"
                        type="number"
                        className="w-full p-2 border border-gray-400 rounded"
                        placeholder="Define tu presupuesto"
                        name="budget"
                        value={budget}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    value="Definir presupuesto"
                    className="bg-blue-600 disabled:opacity-40 hover:bg-blue-700 w-full p-2 text-white uppercase font-bold cursor-pointer"
                    disabled={isValid}
                />
            </form>
        </>
    );
}

export default BudgetForm;
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useBudget } from "../hooks/useBudget";
import { useMemo } from "react";
import { formatDate } from "../helpers/utils";
import { Expense } from "../types/index";
import { AmountDisplay } from "./AmountDisplay";
import { categories } from "../data/categories";


const ExpenseDetails = ({ expense }: { expense: Expense }) => {
    
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );
  
  const {dispatch} = useBudget();

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type:'get-expense-by-id', payload: {id: expense.id}})}>
      Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
            <SwipeAction 
                destructive={true}
                onClick={() => dispatch({type:'remove-expense', payload: {id: expense.id}})}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
  );

  return (
    <SwipeableList>
        <SwipeableListItem
            maxSwipe={1}
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
                <div className="bg-white  rounded-lg shadow-lg w-full p-10 border-b border-gray-200 flex gap-5 items-center ">
                    <div>
                    <img
                        src={`/icono_${categoryInfo.icon}.svg`}
                        alt="Icono gasto"
                        className="w-20"
                    />
                    </div>

                    <div className="flex-1 space-y-2">
                    <p className="text-slate-500 font-bold uppercase text-sm">
                        {categoryInfo?.name}
                    </p>
                    <p>{expense.name}</p>
                    <p className="text-slate-600 text-sm">
                        {formatDate(expense.date!.toLocaleString())}
                    </p>
                    </div>

                    <AmountDisplay amount={expense.amount} />
                </div>
        </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseDetails;

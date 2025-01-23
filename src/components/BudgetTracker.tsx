import { AmountDisplay } from "./AmountDisplay";

function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="grafica de gastos" />
      </div>

      <div className="flex flex-col  justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-3 rounded-md uppercase font-bold text-white text-lg"
        >
          Resetear App
        </button>
        <AmountDisplay label="Presupuesto" amount={3000} />
        <AmountDisplay label="Presupuesto" amount={2000} />
        <AmountDisplay label="Presupuesto" amount={1000} />
      </div>
    </div>
  );
}

export default BudgetTracker;

import { formatCurrency } from "../helpers/utils";


type AmountDisplayProps = {
    label?: string;
    amount: number;
}


export const AmountDisplay = ({label, amount}: AmountDisplayProps) => {
  return (
    <p className="text-2xl font-bold text-blue-600">
        {label && `${label}: `} <span className="font-black text-black">{formatCurrency(amount) }</span>
    </p>
  )
}

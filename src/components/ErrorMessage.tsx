import { PropsWithChildren } from "react"




const ErrorMessage = ({children}: PropsWithChildren ) => {
  return (
    <p className="bg-red-600 text-sm p-2 text-white text-center font-bold">
        {children}
    </p>
  )
}

export default ErrorMessage
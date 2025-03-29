import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducers"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg
        flex justify-between w-full "
        onClick={() => dispatch({type: 'add-item', payload: {item}}) } //Cuando se haga click en el boton se ejecuta la funcion dispatch que le pasamos como prop y le pasamos el action type y el payload que es el item que queremos agregar a la orden
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

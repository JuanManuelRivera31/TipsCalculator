import { Dispatch, useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'
import { OrderActions } from '../reducers/order-reducers'

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  dispatch: Dispatch<OrderActions>
}

export function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {
  
    const subtotalAmount = useMemo(() => //Memo para evitar que se recalcule en cada render
        order.reduce( (total, item) => total + (item.price * item.quantity), 0) ,
        [order])
        //Esta derivado de subtotalAmount
        const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]) //Use Memo se ejecut cuando las dependencias cambian
        //Codigo se ejecuta cuando cambia tip y cuando cambia order
        const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])
        return (
    <>
    <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar: {''}
            <span className="font-bold">{ formatCurrency(subtotalAmount)}</span>
        </p>

        <p>Propina: {''}
            <span className="font-bold">{ formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a pagar: {''}
            <span className="font-bold">{ formatCurrency(totalAmount)}</span>
        </p>
    </div>

    <button 
        className='w-full bg-black p-3 uppercase text-white font-bold 
        mt-10 disabled-opacity-10'
        disabled={totalAmount === 0}
        onClick={() => dispatch({type: 'place-order'}) }
    >
        Guardar Orden
    </button>
    </>
  )
}
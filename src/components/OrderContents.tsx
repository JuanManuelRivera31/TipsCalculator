import { Dispatch } from 'react'
import { formatCurrency } from '../helpers'
import { MenuItem, OrderItem } from '../types'
import { OrderActions } from '../reducers/order-reducers'

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
} 

export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>
      
      <div className='space-y-3 mt-10'>
          {order.map(item => ( //Iterar sobre la orden
            <div 
              key={item.id} 
              className='flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b'
            >
              <div>
                  <p className='text-lg'>
                    {item.name} - {formatCurrency(item.price)}
                  </p>
                  <p className='font-black'>
                    Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                  </p>
              </div>

              <button 
              className='bg-red-600 h-8 w-8 rounded-full text-white'
              onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})} //Cuando se haga click en el boton se ejecuta la funcion dispatch que le pasamos como prop y le pasamos el action type y el payload que es el id del item que queremos eliminar de la orden
              >
                  X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}


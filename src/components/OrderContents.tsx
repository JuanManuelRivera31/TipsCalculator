import { OrderItem } from '../types'

type OrderContentsProps = {
    order: OrderItem[]
} 

export default function OrderContents({order} : OrderContentsProps) {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>
      
      <div className='space-y-3 mt-10'>
        {order.length === 0 ? 
        <p className='text-lg'>La orden está vacia</p>
        : 
        order.map(item => ( //Iterar sobre la orden
          <div key={item.id} className='flex justify-between'>
            <p>{item.name} x {item.quantity}</p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}


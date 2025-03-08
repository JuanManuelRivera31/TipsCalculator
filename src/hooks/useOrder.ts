import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    const [order, setOrder]= useState<OrderItem[]>([]) //Generic para asignar como valor inicial
 
    const addItem = (item: MenuItem) => {         
        const itemExists = order.find(orderItem => orderItem.id === item.id) //Busca en el array de OrderItem si el item que le pasamos ya existe en el array
        if(itemExists){ 
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? //Identifica el elemento repetido con map que inmuta el state y retorna un arreglo new
                {...orderItem, quantity: orderItem.quantity + 1} : //Toma una copia de lo que haya en nuestra orden pero incrementa cantidad
                orderItem 
            )        
            setOrder(updatedOrder) //Setea el nuevo arreglo con la cantidad incrementada    
        } else{
            const newItem : OrderItem= {...item, quantity: 1} //Casteado a tipo Order Item
            setOrder([...order, newItem]) //Toma una copia del state y lo setea con un state diferente casteado al mismo tipo de type
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id)) //Toma una copia del state y lo setea con un state diferente casteado al mismo tipo de type
    }

    return{
        order,
        addItem,
        removeItem
    }
}
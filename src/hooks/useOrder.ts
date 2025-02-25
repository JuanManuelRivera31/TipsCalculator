import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    const [order, setOrder]= useState<OrderItem[]>([]) //Generic para asignar como valor inicial
 
    const addItem = (item: MenuItem) => {

    }

    return{
        addItem
    }
}
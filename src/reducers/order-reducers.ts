import { MenuItem, OrderItem } from "../types";

export type OrderActions = 
    { type: 'add-item', payload: { item : MenuItem} } |
    { type: 'remove-item', payload: { id : MenuItem['id']} } |
    { type: 'place-order'} |
    { type: 'add-tip', payload: { value: number} }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    if(action.type === 'add-item') {
        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id) //Busca en el array de OrderItem si el item que le pasamos ya existe en el array
        let order : OrderItem[] = []
        if(itemExists){ 
            order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? //Identifica el elemento repetido con map que inmuta el state y retorna un arreglo new
                {...orderItem, quantity: orderItem.quantity + 1} : //Toma una copia de lo que haya en nuestra orden pero incrementa cantidad
                orderItem 
            )          
        } else{
            const newItem : OrderItem= {...action.payload.item, quantity: 1} //Casteado a tipo Order Item
            order= [...state.order, newItem]
        }

        return {
            ...state,
            order //Setea el nuevo arreglo con la cantidad incrementada
        }
    }
    if(action.type === 'remove-item') { 
        const order = state.order.filter(item => item.id !== action.payload.id) //Toma una copia del state y lo setea con un state diferente casteado al mismo tipo de typesetOrder(order.filter(item => item.id !== id)) //Toma una copia del state y lo setea con un state diferente casteado al mismo tipo de type      
        return {
            ...state,
            order
        }
    }

    //Use reducer no tiene una funcion que modifique directamente el state
    if(action.type === 'add-tip') {
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }

    if(action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip: 0
        }
    }


    return state

}
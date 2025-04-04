import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { OrderTotals } from "./components/OrderTotals"
import TipPercentajeForm from "./components/TipPercentajeForm"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducers"

function App() {

  // const { order, tip, setTip, addItem, removeItem, placeOrder}= useOrder()
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
    <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black
      ">Calculadora de propinas y consumo</h1>
    </header>

    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2> {/*  Renderizar ese componente una vez por cada que elemento en nuestro array */}
          
          <div className="space-y-3 mt-10">
              {menuItems.map(item => (
                  <MenuItem
                    key={item.id} 
                    item={item}
                    dispatch={dispatch}
                  />
              ))}
          </div>
      </div>
      
      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />

              <TipPercentajeForm 
                dispatch={dispatch}
                tip={state.tip}
              />
              
              <OrderTotals 
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
            
          ) : (
            <p className="text-lg">La orden está vacia</p>
          )}
          
      </div>

    </main>
    </>
  )
}

export default App

import { useSelector } from "react-redux"
import { CartCard } from "../components"
import { useTitle } from "../hooks/useTitle"

export const Cart = () => {

  useTitle("Cart")


  const cartList=useSelector(state=>state.cartState.cartList);
  const total=useSelector(state=>state.cartState.total);


  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
  //   {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  // ]

  return (
    <main>
      <section className="cart">
        <h1>cart items:{cartList.length} | ${total}</h1>
      {cartList.map((product)=>(
        <CartCard key={product.id} product={product}/>
      ))}

  </section>
  </main>
    
  )
}



import { Routes,Route } from "react-router-dom";
import {Home,Cart} from "../pages";


export const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />}>Home</Route>
    <Route path="/cart" element={<Cart />}>Cart</Route>
   </Routes>
   </>
  )
}



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./Menu";
import DishDetails from "./pages/DishDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import Layout from "./Layout";
import "./App.css";

function App(){
    return(
        <BrowserRouter>

        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/menu" element = {<Menu/>}/>
            <Route path="/menu/:id" element={<DishDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>

        </BrowserRouter>
    )
}
export default App;
import "./App.css";
import { Home } from "../Home/Home";
import { MyOrder } from "../MyOrder/MyOrder";
import { MyAccount } from "../MyAccount/MyAccount";
import { MyOrders } from "../MyOrders/MyOrders";
import { NotFound } from "../NotFound/NotFound";
import { SignIn } from "../SignIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-account" element={<MyAccount />}></Route>
        <Route path="/my-order" element={<MyOrders />}></Route>
        <Route path="/my-orders" element={<MyOrders />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

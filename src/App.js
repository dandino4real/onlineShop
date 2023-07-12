import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./auth/Register";
import Login from "./auth/Login";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";
import CreateProduct from "./admin/createProduct";
import Summary from "./admin/Summary";
import ProductList from "./admin/list/ProductList";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import Product from "./details/Product";
import Order from "./details/Order";
import User from "./details/userProfile";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/user/:id" element={<User/>} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="create-product" element={<CreateProduct />} />
          </Route>
          <Route path="summary" element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

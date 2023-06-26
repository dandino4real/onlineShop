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
import Products from "./admin/Product";
import CreateProduct from "./admin/createProduct";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="products" element={<Products />} />
          <Route path="products" element={<CreateProduct />} />
        </Route>
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

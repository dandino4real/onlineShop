import "./App.css";
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./auth/Register";
import Login from "./auth/Login";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

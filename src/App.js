import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header";
import ProductDetails from "./components/Home/Products/ProductDetails/ProductDetails";
import Register from "./components/Login/Register/Register";
import Login from "./components/Login/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="product/:id"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;

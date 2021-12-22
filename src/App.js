import HomePage from "./pages/homepage/homepage.component";
import Login from "./pages/login/login.component";
import { ProductList } from "./pages/productlist/productlist.component";
import { ProductPage } from "./pages/productpage/productpage.component";
import Register from "./pages/register/register.component";
import Cart from "./pages/cartpage/cartpage.component";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <ProductList /> */}
      {/* <ProductPage /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  ); 
}

export default App;

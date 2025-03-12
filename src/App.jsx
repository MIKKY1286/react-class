import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Products from "./pages/Products";
import ProfileCard from "./components/ProfileCard";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  const signup = () => {
    alert("signup");
  };
  // parameter => param
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>

          <Route  path="/products" element={<Products />}/>
          <Route  path="/products/:id" element={<SingleProduct />}/>

          <Route  path="/users" element={<ProfileCard />}/>
          <Route  path="/counter/show" element={<Counter />}/>

          <Route path="*" element={<NotFound />}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default App;

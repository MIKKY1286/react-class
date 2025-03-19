import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Products from "./pages/Products";
import ProfileCard from "./components/ProfileCard";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  
  // parameter => param
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/users" element={<ProfileCard />} />
          <Route path="/counter/show" element={<Counter />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

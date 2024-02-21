import "./App.css";
import NavBAR from "./components/NavBAR";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ProductDeateles from "./components/ProductDetails";
function App() {
  return (
    <>
       <div className="App">
      <NavBAR />
      <Routes>
        <Route
          path="/E-commerce-React-Vite"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/E-commerce-React-Vite/about" element={<About />} />
        <Route path="/E-commerce-React-Vite/product/:productId" element={<ProductDeateles />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

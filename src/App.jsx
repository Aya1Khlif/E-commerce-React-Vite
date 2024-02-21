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
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDeateles />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

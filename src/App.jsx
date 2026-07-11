import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import CounterUp from "./Components/CounterUp/CounterUp";
import CallToAction from "./Components/CallToAction/CallToAction";
import Footer from "./Components/Footer/Footer";
import AllShowcasingProduct from "./Components/AllShowcasingProduct/AllShowcasingProduct";
import { Suspense, useEffect, useState } from "react";
import StepToStart from "./Components/StepToStart/StepToStart";
import AllPricing from "./Components/AllPricing/AllPricing";

function App() {
  const [availableProduct, setAvailableProduct] = useState("available");
  const [selectedProduct, setSelectedProduct] = useState([]);

  const fetchingDigitalTools = async () => {
    const response = await fetch("/digitalTools.json");
    return response.json();
  };

  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    const fetchingPricing = async () => {
      try {
        const response = await fetch("/pricingData.json");
        const responsesData = await response.json();
        setPricingData(responsesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingPricing();
  }, []);

  const fetchingModernTools = fetchingDigitalTools();

  return (
    <div>
      <NavBar
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        availableProduct={availableProduct}
        setAvailableProduct={setAvailableProduct}
      />

      <HeroBanner />

      <CounterUp />

      <Suspense
        fallback={
          <div className="flex items-center justify-center bg-transparent">
            <span className="loading loading-ring text-primary loading-lg w-60 h-60"></span>
          </div>
        }
      >
        <AllShowcasingProduct
          fetchingModernTools={fetchingModernTools}
          availableProduct={availableProduct}
          setAvailableProduct={setAvailableProduct}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </Suspense>

      {availableProduct === "available" && (
        <div>
          <StepToStart />

          <Suspense
            fallback={
              <div className="flex items-center justify-center bg-transparent">
                <span className="loading loading-ring text-primary loading-lg w-60 h-60"></span>
              </div>
            }
          >
            <AllPricing pricingData={pricingData} />
          </Suspense>

          <CallToAction />

          <Footer />
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
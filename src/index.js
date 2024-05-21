import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import Loader from "./Components/Loader";
import { DarkModeToggle } from "dark-mode-toggle";


const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isReload = sessionStorage.getItem("isReloaded");

    if (isReload) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem("isReloaded", "true");

      setTimeout(() => {
        setIsLoading(false); 
      }, 2000);
    }
  }, []);

 
  return (
    <React.StrictMode>
      {isLoading ? (
        <div >
        <Loader/> 
        </div>
      ) : (
      
          <BrowserRouter>
            <App />
            <Toaster />
            <ToastContainer />
          </BrowserRouter>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);

import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import ChatPage from "./Components/ChatPage";
import AnimatedCursor from "react-animated-cursor";
import { DarkModeToggle } from "dark-mode-toggle";
import { useEffect, useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdModeNight } from "react-icons/md";


function App() {
    const [darkMode, setDarkMode] = useState(() => {
      const savedDarkMode = localStorage.getItem("darkMode");
      return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });
  
    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);


  const hanldeDarkMode=()=>{
    setDarkMode(!darkMode);
  }
  
  return (
    <div className={`w-screen h-[100vh] ${darkMode ? 'bg-black' : ''} bg-[#ededed] flex flex-col font-inter`}>
    
      <div className="App">
      <AnimatedCursor 
        innerSize={8}
        outerSize={8}
        color='0, 118, 118'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
          
        ]}
      />
    </div>

    <button className="flex justify-end absolute xl:top-5 xl:right-34 top-16 right-5 sm:top-2 sm:right-34 md:top-2 md:right-34 lg:top-2 lg:right-48 z-40" onClick={hanldeDarkMode}>
      {darkMode ? 
          <MdModeNight className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-2xl text-white" /> : 
          <WiDaySunny className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-2xl"/>
      }
    </button>

      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="chat" element={<ChatPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>

      </div>
    
  );
}

export default App;

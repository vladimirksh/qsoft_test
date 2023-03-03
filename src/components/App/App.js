import React, { useState, useEffect } from "react";
import './App.css';
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";

import Partners from "../Partners/Partners";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function updateWindowSize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  });

  return (
    <div className="App">
      {windowWidth > 766 ? <Header/> : <MobileHeader/>}
      <Partners />
    </div>
  );
}

export default App;

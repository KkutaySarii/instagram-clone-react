import React, { useEffect, useRef, useState } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {


  return (
    <div className="overflow-hidden">
      <Main />
      <Footer />
    </div>
  );
}

export default App;

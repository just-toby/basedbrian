import React, { useEffect } from 'react';
import Hero from "./components/Hero";
import Hidden from "./components/Hidden";
import World from "./components/World";
import './App.css'


function App() {
  useEffect(() => {
    document.title = "Based Brian";
  }, []);
  return (
    <div>
      <Hero/>
      <World/>
<Hidden/> 



    </div>
  )
}

export default App
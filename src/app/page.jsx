"use client";
import Header from "./components/Header";
import { useState } from "react";
import Main from "./components/Main";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    isActive?
    setIsActive(false) : null ;
  }
  
  
  return (
    <section onClick={handleToggle}>
     <div className="sticky top-0 z-50 bg-white">
     <Header  isActive={isActive} setIsActive={setIsActive}/>
     </div>
    <Main />
    </section>
  );
}

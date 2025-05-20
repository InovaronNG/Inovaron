"use client"
import Header from "./components/Header";
import { useState } from "react";


export default function RootLayout({ children }) {
  const [isActive, setIsActive] = useState(false);
  const menuClose= (e) => {
    e.stopPropagation();
    isActive?
    setIsActive(false) : null ;
  }
  return (
    <html lang="en">
      <body>
         <div className="sticky top-0 z-50 bg-white">
             <Header  isActive={isActive} setIsActive={setIsActive}/>
             </div>
             <div onClick={menuClose}>
              {children}
             </div>
        
      </body>
    </html>
  );
}

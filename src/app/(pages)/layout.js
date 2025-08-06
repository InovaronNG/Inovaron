"use client"
import Header from "./components/Header";
import { useState } from "react";

// export const metadata = {
//   title: "INOVAREUN || Innovative Solutions for Your Business",
//   // description: "Innovative Solutions for Your Business with inovareun",
// };

export default function RootLayout({ children }) {
  const [isActive, setIsActive] = useState(false);
  const menuClose= (e) => {
    e.stopPropagation();
    isActive?
    setIsActive(false) : null ;
  }
  return (
    <html>
      <head>
        <title>INOVAREUN || Innovative Solutions for Your Business</title>
      </head>
      <div>
         <div className="sticky top-0 z-50 bg-white">
             <Header  isActive={isActive} setIsActive={setIsActive}/>
             </div>
             <div onClick={menuClose}>
              {children}
             </div>
        
      </div>
    </html>
  );
}

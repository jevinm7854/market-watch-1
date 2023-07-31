// import "./App.css";
import Ddl1 from "./components/Ddl1";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Stat from "./components/Stat";
import { registerLicense } from "@syncfusion/ej2-base";
import Spline from "../src/components/Spline"

function App() {
 // registerLicense() 
  //  
 // "Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhed3RQRmFeWU13WEc="
 // );
    // registerLicense()
    //   
    //"ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5VdkBjX35ecHFdTmdY"
    // );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ddl1 />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/spline" element={<Spline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

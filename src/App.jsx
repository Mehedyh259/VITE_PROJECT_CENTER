import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import MyProjects from "./pages/MyProjects/MyProjects";

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/myprojects" element={<MyProjects />}></Route>
    
          </Route>
        </Routes>
    </HashRouter>
  );
}

export default App;

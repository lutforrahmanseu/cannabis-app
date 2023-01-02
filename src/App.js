// import logo from './logo.svg';
import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNew from "./components/AddNew/AddNew";
import Home from "./components/Home/Home";

const App = () => {
  const [card, setCard] = useState();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home card={card} />} />
        <Route path="/inventory" element={<AddNew />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

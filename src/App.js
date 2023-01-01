// import logo from './logo.svg';
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";

function App() {
  const [card, setCard] = useState({});
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div>
      <Home card={card}></Home>
    </div>
  );
}

export default App;

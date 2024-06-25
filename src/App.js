import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./component/Start";
import Navbar from "./component/Navbar";
import Assignment from "./component/Assignment";
import Thankyou from "./component/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/assessment" element={<Assignment />} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

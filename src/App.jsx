
import Home from "./sections/Home";
import Demo from "./sections/Demo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/demo" element={<Demo />}></Route>
      </Routes>
    </BrowserRouter>

     



  );
}

export default App;

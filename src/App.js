import Home from "./Pages/Homepage/Home";
import Contact from "./Pages/Contactpage/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { homeContext, HomeProvider } from "./Context/HomeContext";
import "./assets/css/App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HomeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

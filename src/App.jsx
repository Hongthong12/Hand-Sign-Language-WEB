import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUS/ContactUs";
import Video from "./Components/Video/Video";





function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          
        </Routes>
    </div>
  );
}

export default App;
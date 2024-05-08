import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Departments from "./components/Departments";
import Cardiology from "./components/departmets/Cardiology";
import Neurology from "./components/departmets/Neurology";
import Orthopedics from "./components/departmets/Orthopedics";
import Insurance from "./components/Insurance";
import Contact from "./components/Contact";
import Bookonline from "./components/Bookonline";
import Booknow from "./components/Booknow";
import Payment from "./components/Payment";
import Booked from "./components/Booked";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookonline" element={<Bookonline />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/booked" element={<Booked />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

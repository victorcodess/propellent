import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./homepage";
import Footer from "./footer";
import Images from "./images";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/images" element={<Images />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

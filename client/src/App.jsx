import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Landing } from "./pages/Landing";
import UseMemoModule from "./pages/UseMemoModule";
import UseLayoutModule from "./pages/UseLayoutModule";
import UseRefModule from "./pages/UseRefModule";
import UseDebounceModule from "./pages/UseDebounceModule";
import { useEffect, useState } from "react";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  });
  const checkWindowSize = () => {
    setDesktop(window.innerWidth > 900);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/useRef" element={<UseRefModule isDesktop={isDesktop}/>} exact />
          <Route path="/useDebounce" element={<UseDebounceModule isDesktop={isDesktop}/>} exact />
          <Route path="/useMemo" element={<UseMemoModule isDesktop={isDesktop}/>} />
          <Route path="/useLayoutEffect" element={<UseLayoutModule />} exact />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;

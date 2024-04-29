import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Landing } from "./pages/Landing";
import UseMemoModule from "./pages/UseMemoModule";
import UseLayoutModule from "./pages/UseLayoutModule";
import UseRefModule from "./pages/UseRefModule";
import UseDebounceModule from "./pages/UseDebounceModule";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/useRef" element={<UseRefModule />} exact />
          <Route path="/useDebounce" element={<UseDebounceModule />} exact />
          <Route path="/useMemo" element={<UseMemoModule />} />
          <Route path="/useLayoutEffect" element={<UseLayoutModule />} exact />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

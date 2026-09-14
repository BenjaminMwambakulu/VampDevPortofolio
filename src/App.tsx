import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Home from "./pages/Home";



function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;

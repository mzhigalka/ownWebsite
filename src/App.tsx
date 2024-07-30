import Header from "./components/Header";
import Main from "./components/Main";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="max-w-[1200px] mx-auto px-4">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="px-[16px]">
          <footer className="text-[14px] text-footer max-w-[760px] mx-auto py-[40px]">
            © Matvey Zhigalka 2024
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

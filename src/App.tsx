import Header from "./components/Header";
import Main from "./components/Main";
import About from "./pages/About";

import Work from "./pages/Work";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="max-w-[1200px] mx-auto px-4 max-md:px-5">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/work/:id" element={<Work />} />
          </Routes>
        </div>
        <footer className="px-[16px] ">
          <div className="text-[14px] text-footer max-w-[760px] mx-auto py-[40px]">
            © Matvey Zhigalka 2024
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

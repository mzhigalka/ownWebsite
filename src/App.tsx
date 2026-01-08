import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

const Main = React.lazy(() => import('./components/Main'));
const About = React.lazy(() => import('./pages/About'));
const Work = React.lazy(() => import('./pages/Work'));

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <div className="max-w-[1200px] mx-auto px-4 max-md:px-5">
                    <Header />

                    <Suspense fallback={<LoadingScreen />}>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/work/:id" element={<Work />} />
                        </Routes>
                    </Suspense>
                </div>

                <footer className="px-[16px] ">
                    <div className="text-[14px] text-footer max-w-[760px] mx-auto py-[40px]">
                        © Matvey Zhigalka 2022 — {new Date().getFullYear()}
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;

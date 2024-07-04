import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <div className="py-32">
          <h2 className="text-7xl font-semibold leading-[86px] text-black">Product Design. Interfaces. Systems. Strategy. UX. & More
          </h2>
        </div>
        <Main />
      </div>
    </div>
  );
}

export default App;

import NavBar from "./components/NavBar";
import BodySection from "./components/BodySection";
import "./App.css";

function App() {
  return (
    <>
      <div className="px-2 md:max-w-7xl mx-auto ">
        <NavBar />
        <BodySection />
      </div>
    </>
  );
}

export default App;

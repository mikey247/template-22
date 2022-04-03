import NavBar from "./NavBar";
import { Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import MovieTest from "./Omdb";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movieSearch" element={<MovieTest />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

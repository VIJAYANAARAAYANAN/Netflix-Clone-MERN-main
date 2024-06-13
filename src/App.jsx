import Player from "./components/Player/Player";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
// LAYOUTS
import Navigation from "./layouts/Navigation";
// PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// COMPONENTS
import Background from "./components/styled-components/Background";

const App = () => {
  return (
    <>
      <Navigation />

      <Background>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Background>
    </>
  );
};

export default App;

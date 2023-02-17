import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div style={{ height: '100%', width: '100%' }}>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

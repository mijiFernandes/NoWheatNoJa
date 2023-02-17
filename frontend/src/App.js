import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/my" element={<MyPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

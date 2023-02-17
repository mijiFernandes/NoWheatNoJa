import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <div style={{ height: '100%', width: '100%' }}>
          <Routes>
            <Route path="/post/:id" element={<PostPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <div>
          <Routes>
            <Route path="/post/:id" element={<PostPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/my" element={<MyPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

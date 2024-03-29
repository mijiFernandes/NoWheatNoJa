import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import QuizPage from "./pages/QuizPage";
import Grading from "./pages/Grading";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <div style={{ height: "100%", width: "100%" }}>
          <Routes>
            <Route path="/post/:id/quiz" element={<QuizPage />}></Route>
            <Route path="/post/:id" element={<PostPage />}></Route>
            <Route path="/user/:id" element={<UserPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/create" element={<CreatePage />}></Route>
            <Route path="/grade/:id" element={<Grading />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ToDoDetailPage from "./pages/ToDoDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos/:toDoId" element={<ToDoDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

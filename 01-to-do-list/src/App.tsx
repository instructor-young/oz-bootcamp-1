import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToDosProvider } from "./contexts/todos.context";
import HomePage from "./pages/HomePage";
import ToDoDetailPage from "./pages/ToDoDetailPage";

function App() {
  return (
    <ToDosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos/:toDoId" element={<ToDoDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ToDosProvider>
  );
}

export default App;

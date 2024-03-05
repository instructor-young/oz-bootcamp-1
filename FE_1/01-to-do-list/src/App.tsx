import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/auth.context";
import { ToDosProvider } from "./contexts/todos.context";
import DefaultLayout from "./layouts/default.layout";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import ToDoDetailPage from "./pages/ToDoDetailPage";

function App() {
  return (
    <AuthProvider>
      <ToDosProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="" element={<HomePage />} />
              <Route path="/todos/:toDoId" element={<ToDoDetailPage />} />
              <Route path="/log-in" element={<LogInPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToDosProvider>
    </AuthProvider>
  );
}

export default App;

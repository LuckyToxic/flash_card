import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./pages/Layout/Layout";
import ThemesPages from "./pages/ThemesPages/ThemesPages";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/themes' element={<ThemesPages />} />
          <Route path='/:id' element={<QuestionsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

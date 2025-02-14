import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import Layout from './pages/Layout/Layout';
import ThemesPages from './pages/ThemesPages/ThemesPages';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/themes' element={<ThemesPages />} />
          <Route path='/questions' element={<QuestionsPage />} />
          {/* <Route path='/tasks' element={<TasksPage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/tasks/:id' element={<OneTaskPage />} /> */}
        </Route>
        <Route path='*' element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

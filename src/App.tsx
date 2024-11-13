import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage/Home';
import LoginPage from './Pages/Auth/LoginPage';
import LogoutPage from './Pages/Auth/SignupPage';

function App() {
  return (
    <div className="h-[100%]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Home from './component/home';
import Login from './component/auth/login';
import Register from './component/auth/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './component/layout/header';
import { Account } from './component/account';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

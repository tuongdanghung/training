import Home from './component/home';
import Login from './component/auth/login';
import Register from './component/auth/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './component/layout/header';
import { Account } from './component/account';
import Book from './component/book';
import SearchKeyword from './component/search';
import Category from './component/category';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book/:id" element={<Book />} />
        <Route path="/profile" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/:params" element={<SearchKeyword />} />
        <Route path="/category/:params" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;

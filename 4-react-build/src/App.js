import logo from './logo.svg';
import './App.css';
import { MyHeader } from './Components/MyHeader/MyHeader';
import { CatalogPage } from './Pages/CatalogPage/CatalogPage';
import { ReviewPage } from './Pages/ReviewPage/ReviewPage';
import { books } from './data';
import { store } from './store';
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './Pages/CartPage/CartPage';
import { BookCard } from './Components/BookCard/BookCard';
function App() {
  const example = books[0].books[0]
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">

          <MyHeader />
          <Routes>
            <Route index element={<CatalogPage />} />
            <Route path={"/cart"} element={<CartPage />} />
            <Route path={"/books/:id"} element={<ReviewPage />} />
            {/* <ReviewPage book={example} /> */}
          </Routes>

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

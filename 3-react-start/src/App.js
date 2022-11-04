import logo from './logo.svg';
import './App.css';
import { MyHeader } from './Components/MyHeader/MyHeader';
import { CatalogPage } from './Pages/CatalogPage/CatalogPage';
import { ReviewPage } from './Pages/ReviewPage/ReviewPage';
import { books } from './data';
function App() {
  const example = books[0].books[0]
  return (
    <div className="App">
      <MyHeader />
      {/* <CatalogPage /> */}
      <ReviewPage book={example} />
    </div>
  );
}

export default App;

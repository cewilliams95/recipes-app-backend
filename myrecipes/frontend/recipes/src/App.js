// TODO: replace HashRouter with BrowserRouter with a fix to the server-side rendering problem (goes to Django URL instead of React)
import {HashRouter as Router,Routes, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import RecipesListPage from './pages/RecipesListPage';
// import Footer from './components/Footer';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app"> 
        <Header />
          <Routes>
            <Route path='/' exact element={<RecipesListPage />} />
            <Route path='/recipe/:id' element={<RecipePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

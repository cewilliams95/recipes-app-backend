import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import Footer from './components/Footer';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app"> 
        <Header />
          <Routes>
            <Route path='/' exact element={<NotesListPage />} />
            <Route path='/note/:id' element={<NotePage />}></Route>
          </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

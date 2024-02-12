import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./pages/a_propos/a_propos";
import Error from "./pages/page_error/page_error";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/homepage';
import FicheLogement from "./pages/logement/logements";
import Rate from './components/note/note';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
          {/* <Route path="/test" element={<Rate />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

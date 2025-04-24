import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "../Components/Navbar"

function MainRoute() {
  return (
    <Router>
        <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoute;
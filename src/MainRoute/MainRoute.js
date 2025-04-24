import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from "../Pages/History";
import NewDecision from "../Pages/LetestDecision";
import ReviewDecision from "../Pages/ReviewDecision";
import Navbar from "../Components/Navbar"

function MainRoute() {
  
  return (
    <Router>
        <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<History />} />
            <Route path="/history" element={<History />} />
            <Route path="/new" element={<NewDecision />} />
            <Route path="/review/:id" element={<ReviewDecision />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoute;
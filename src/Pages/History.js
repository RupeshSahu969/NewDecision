import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DecisionList from '../Components/DecisionList';
import '../Style/style.css';

const History = () => {
  const [decisions, setDecisions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDecisions = JSON.parse(localStorage.getItem('decisions')) || [];
    setDecisions(storedDecisions);
  }, []);

  const handleSelectDecision = (id) => {
    navigate(`/review/${id}`);
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Decision History</h1>
          <button
            onClick={() => navigate('/new')}
            className="action-button"
          >
            New Decision
          </button>
        </div>
        <DecisionList 
          decisions={decisions} 
          onSelect={handleSelectDecision} 
        />
      </div>
    </div>
  );
};

export default History;
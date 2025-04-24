import { useState } from 'react';
import DecisionForm from '../Components/DecisionForm';
import { useNavigate } from 'react-router-dom';
import '../Style/style.css';

const LatestDecision = () => {
  
  const [decisions, setDecisions] = useState(
    JSON.parse(localStorage.getItem('decisions')) || []
  );
  const navigate = useNavigate();

  const handleSave = (newDecision) => {
    const updatedDecisions = [newDecision, ...decisions];
    setDecisions(updatedDecisions);
    localStorage.setItem('decisions', JSON.stringify(updatedDecisions));
    navigate('/history');
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Log New Decision</h1>
        <DecisionForm onSave={handleSave} />
      </div>
    </div>
  );
};

export default LatestDecision;
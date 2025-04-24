import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DecisionDetail from '../Components/DecisionDetail';
import '../Style/style.css';

const ReviewDecision = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [decision, setDecision] = useState(null);

  useEffect(() => {
    const decisions = JSON.parse(localStorage.getItem('decisions')) || [];
    const foundDecision = decisions.find(d => d.id === parseInt(id));
    if (!foundDecision) {
      navigate('/history');
      return;
    }
    setDecision(foundDecision);
  }, [id, navigate]);

  const handleUpdate = (updatedDecision) => {
    const decisions = JSON.parse(localStorage.getItem('decisions')) || [];
    const updatedDecisions = decisions.map(d => 
      d.id === updatedDecision.id ? updatedDecision : d
    );
    localStorage.setItem('decisions', JSON.stringify(updatedDecisions));
    navigate('/history');
  };

  if (!decision) return <div className="loading-message">Loading...</div>;

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Review Decision</h1>
        <DecisionDetail decision={decision} onUpdate={handleUpdate} />
      </div>
    </div>
  );
};

export default ReviewDecision;
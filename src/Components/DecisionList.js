import DecisionItem from './DecisionItem';
import '../Style/style.css';

const DecisionList = ({ decisions, onSelect }) => {
  return (
    <div className="decision-list">
      {decisions.length === 0 ? (
        <p className="empty-list-message">No decisions recorded yet</p>
      ) : (
        decisions.map((decision) => (
          <DecisionItem 
            key={decision.id} 
            decision={decision} 
            onClick={() => onSelect(decision.id)} 
          />
        ))
      )}
    </div>
  );
};

export default DecisionList;
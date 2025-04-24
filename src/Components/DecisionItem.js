import '../Style/style.css';

const DecisionItem = ({ decision, onClick }) => {
  const date = new Date(decision.date).toLocaleDateString();
  
  const getItemClass = () => {
    if (!decision.isDecided) return 'decision-item';
    if (decision.reflection?.wasGood === true) return 'decision-item decision-item-good';
    if (decision.reflection?.wasGood === false) return 'decision-item decision-item-bad';
    return 'decision-item decision-item-neutral';
  };
  
  return (
    <div 
      onClick={onClick}
      className={getItemClass()}
    >
      <div className="decision-item-header">
        <h3 className="decision-item-title">{decision.title}</h3>
        <span className="decision-item-date">{date}</span>
      </div>
      <div className="decision-item-status">
        <span className={`status-badge ${
          decision.isDecided ? 'status-decided' : 'status-thinking'
        }`}>
          {decision.isDecided ? 'Decided' : 'Thinking'}
        </span>
        {decision.isDecided && (
          <span className="decision-choice">
            Chose: {decision.finalChoice}
          </span>
        )}
      </div>
    </div>
  );
};

export default DecisionItem;
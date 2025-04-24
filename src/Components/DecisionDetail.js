import { useState } from 'react';
import '../Style/style.css';

const DecisionDetail = ({ decision, onUpdate }) => {

  const [finalChoice, setFinalChoice] = useState(decision.finalChoice || '');
  const [explanation, setExplanation] = useState(decision.explanation || '');
  const [wasGood, setWasGood] = useState(decision.reflection?.wasGood ?? null);
  const [reflection, setReflection] = useState(decision.reflection?.text || '');

  const handleSave = () => {
    const updatedDecision = {
      ...decision,
      isThinking: false,
      isDecided: true,
      finalChoice,
      explanation,
      reflection: {
        wasGood,
        text: reflection,
      },
    };
    onUpdate(updatedDecision);
  };

  return (
    <div className="decision-detail">
    <div>
      <h2 className="detail-title">{decision.title}</h2>
      <p className="detail-date">
        Created on {new Date(decision.date).toLocaleDateString()}
      </p>
    </div>

    <div>
      <h3 className="form-label">Pros</h3>
      <ul className="pros-cons-list">
        {decision.pros.map((pro, i) => (
          <li key={i} className="pros-cons-item">
            <span className="pro-icon">✓</span>
            <span>{pro}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="form-label">Cons</h3>
      <ul className="pros-cons-list">
        {decision.cons.map((con, i) => (
          <li key={i} className="pros-cons-item">
            <span className="con-icon">✗</span>
            <span>{con}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="form-group">
      <label htmlFor="finalChoice" className="form-label">
        Final Decision*
      </label>
      <input
        type="text"
        id="finalChoice"
        value={finalChoice}
        onChange={(e) => setFinalChoice(e.target.value)}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="explanation" className="form-label">
        Explanation
      </label>
      <textarea
        id="explanation"
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        rows={3}
        className="textarea"
      />
    </div>

    <div className="form-group">
      <label className="form-label">
        Was this a good decision?
      </label>
      <div className="radio-group">
        <label className="radio-option">
          <input
            type="radio"
            name="wasGood"
            checked={wasGood === true}
            onChange={() => setWasGood(true)}
            className="radio-input"
          />
          <span className="radio-label">Yes</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="wasGood"
            checked={wasGood === false}
            onChange={() => setWasGood(false)}
            className="radio-input"
          />
          <span className="radio-label">No</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="wasGood"
            checked={wasGood === null}
            onChange={() => setWasGood(null)}
            className="radio-input"
          />
          <span className="radio-label">Unsure</span>
        </label>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="reflection" className="form-label">
        Reflection
      </label>
      <textarea
        id="reflection"
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        rows={3}
        className="textarea"
        placeholder="Any additional thoughts looking back?"
      />
    </div>

    <button
      onClick={handleSave}
      className="form-button"
    >
      Save Reflection
    </button>
  </div>
  );
};

export default DecisionDetail;
import { useState } from 'react';
import '../Style/style.css';

const DecisionForm = ({ onSave }) => {

  const [title, setTitle] = useState('');
  const [pros, setPros] = useState(['']); 
  const [cons, setCons] = useState(['']); 
  const [isThinking, setIsThinking] = useState(true);

const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDecision = {
      id: Date.now(),
      title,
      date: new Date().toISOString(),
      pros: pros.filter(p => p.trim()), 
      cons: cons.filter(c => c.trim()), 
      isThinking,
      isDecided: false,
    };
    onSave(newDecision);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setPros(['']);
    setCons(['']);
    setIsThinking(true);
  };

  const addProField = () => {
    setPros([...pros, '']);
  };

  const removeProField = (index) => {
    if (pros.length > 1) {
      const newPros = [...pros];
      newPros.splice(index, 1);
      setPros(newPros);
    }
  };

  const handleProChange = (index, value) => {
    const newPros = [...pros];
    newPros[index] = value;
    setPros(newPros);
  };

  const addConField = () => {
    setCons([...cons, '']);
  };

  const removeConField = (index) => {
    if (cons.length > 1) {
      const newCons = [...cons];
      newCons.splice(index, 1);
      setCons(newCons);
    }
  };

  const handleConChange = (index, value) => {
    const newCons = [...cons];
    newCons[index] = value;
    setCons(newCons);
  };

  return (
    <div className="decision-form-container">
    <div className="decision-form-card">
      <div className="decision-form-content">
        <h2 className="decision-form-title">New Decision</h2>
        
        <form onSubmit={handleSubmit} className="form-space row g-3">
          
          <div className="col-12 col-md-6">
            <label htmlFor="title" className="form-label">
              Decision Title*
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              required
            />
            {submitted && !title.trim() && (
              <div className="error-message">Title is required</div>
            )}
          </div>

          
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="form-label">
                Pros (optional)
              </label>
              <button
                type="button"
                onClick={addProField}
                className="add-button"
              >
                + Add another pro
              </button>
            </div>
            
            <div className="row g-2">
              {pros.map((pro, index) => (
                <div key={`pro-${index}`} className="col-12 col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      value={pro}
                      onChange={(e) => handleProChange(index, e.target.value)}
                      className="form-input"
                      placeholder={`Pro #${index + 1}`}
                    />
                    {pros.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProField(index)}
                        className="remove-button"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="form-label">
                Cons (optional)
              </label>
              <button
                type="button"
                onClick={addConField}
                className="add-button"
              >
                + Add another con
              </button>
            </div>
            
            <div className="row g-2">
              {cons.map((con, index) => (
                <div key={`con-${index}`} className="col-12 col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      value={con}
                      onChange={(e) => handleConChange(index, e.target.value)}
                      className="form-input"
                      placeholder={`Con #${index + 1}`}
                    />
                    {cons.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeConField(index)}
                        className="remove-button"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="col-12">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="isThinking"
                checked={isThinking}
                onChange={(e) => setIsThinking(e.target.checked)}
                className="checkbox-input"
              />
              <label htmlFor="isThinking" className="checkbox-label">
                Still thinking about this
              </label>
            </div>
          </div>

        
          <div className="col-12">
            <button
              type="submit"
              className="form-button"
            >
              Save Decision
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default DecisionForm;
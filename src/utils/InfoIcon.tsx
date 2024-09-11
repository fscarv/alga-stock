import React, { useEffect } from 'react';
import { Tooltip } from 'bootstrap';

const FormWithInfoIcon = () => {
  useEffect(() => {
    // Ativar tooltips do Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <div className="mb-3">
      <label htmlFor="inputEmail" className="form-label">
        Email address
        <i
        className="bi bi-question-circle-fill ms-1"
        data-bs-toggle="tooltip"
        title="Digite o seu melhor email."
        style={{ fontSize: '12px', cursor: 'pointer', verticalAlign: 'middle' }}>
        </i>
      </label>
      <input
        type="email"
        className="form-control"
        id="inputEmail"
        placeholder="nome@exemplo.com"
      />
    </div>
  );
};

export default FormWithInfoIcon;
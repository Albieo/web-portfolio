import React from 'react';
import './status-pill.scss';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Paused';

interface StatusPillProps {
  status: ProjectStatus;
}

const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  const statusClass = status.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`status-pill status-pill--${statusClass}`}>
      <span className="status-pill__light"></span>
      <span className="status-pill__text">{status}</span>
    </div>
  );
};

export default StatusPill;

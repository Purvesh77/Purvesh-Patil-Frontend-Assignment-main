import React from 'react';
import Tag from './Tag';
import './styles/Card.css';

const Card = ({ ticket, grouping, user }) => {
  // Constants for icon paths
  const statusIcon = `/icons/status/${ticket.status}.svg`;
  const priorityIcon = `/icons/priority/${ticket.priority}.svg`;

  // Helper function to generate user initials
  const getUserInitials = (name) =>
    name
      .split(' ')
      .map((part) => part[0]?.toUpperCase())
      .join('');

  return (
    <div className="card">
      {/* Header Section */}
      <div className="card-header">
        <div className="card-id">{ticket.id}</div>

        {/* Conditionally render user icon if grouping is not 'user' */}
        {grouping !== 'user' && (
          <div className="card-user">
            <div className="card-user-icon">
              {getUserInitials(user.name)}
            </div>
            <div
              className={user.available ? 'active-user' : 'inactive-user'}
            ></div>
          </div>
        )}
      </div>

      {/* Body Section */}
      <div className="card-body">
        {/* Conditionally render status icon */}
        {grouping !== 'status' && <img src={statusIcon} alt="Status Icon" />}
        <span>{ticket.title}</span>
      </div>

      {/* Footer Section */}
      <div className="card-footer">
        {/* Conditionally render priority icon */}
        {grouping !== 'priority' && (
          <div className="card-footer-priority">
            <img src={priorityIcon} alt="Priority Icon" />
          </div>
        )}

        {/* Render tags */}
        <div className="card-footer-tags">
          {ticket.tag.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

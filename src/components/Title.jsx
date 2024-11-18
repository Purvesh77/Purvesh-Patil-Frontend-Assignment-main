import React from 'react';
import './styles/Title.css';

// Icons for the UI
const icons = {
  plus: '/icons/plus.svg',
  ellipsis: '/icons/ellipsis.svg',
};

// Priority mapping for associated values
const priorityLevels = {
  'No priority': 0,
  Low: 1,
  Medium: 2,
  High: 3,
  Urgent: 4,
};

function Title({ title, grouping, count, available = true }) {
  // Generate a user icon from the initials of the title (for user grouping)
  const getUserIcon = (name) => name.split(' ').map((n) => n[0]?.toUpperCase()).join('');

  // Get the appropriate image source for the grouping type
  const getGroupIcon = () => {
    if (grouping === 'user') {
      return (
        <div className='card-user'>
          <div className='card-user-icon'>{getUserIcon(title)}</div>
          <div className={available ? 'active-user' : 'inactive-user'}></div>
        </div>
      );
    } else if (grouping === 'status') {
      return <img src={`/icons/status/${title}.svg`} alt={`${title} icon`} />;
    } else if (grouping === 'priority') {
      return <img src={`/icons/priority/${priorityLevels[title]}.svg`} alt={`${title} priority icon`} />;
    }
    return null;
  };

  return (
    <div className='card-title'>
      <div className='card-title-left'>
        {getGroupIcon()}
        <span className='group-title'>{title}</span>
        <span className='group-count'>{count}</span>
      </div>
      {count > 0 && (
        <div className='card-title-right'>
          <button className='card-title-right-btn'>
            <img src={icons.plus} alt='Add' />
          </button>
          <button className='card-title-right-btn'>
            <img src={icons.ellipsis} alt='Options' />
          </button>
        </div>
      )}
    </div>
  );
}

export default Title;

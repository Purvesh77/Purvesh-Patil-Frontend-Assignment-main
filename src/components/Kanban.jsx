import React, { useEffect, useState } from 'react';
import './styles/Kanban.css';
import Navbar from './Navbar';
import Title from './Title';
import Card from './Card';
import Order from './Order';
import DATA from './getItems';

function Kanban() {
  const [grouping, setGrouping] = useState(() => localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(() => localStorage.getItem('ordering') || 'title');

  // Update local storage whenever 'ordering' changes
  useEffect(() => {
    localStorage.setItem('ordering', ordering);
  }, [ordering]);

  // Update local storage whenever 'grouping' changes
  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  // Ensure ordering resets to 'title' if grouping is by priority
  useEffect(() => {
    if (grouping === 'priority') {
      setOrdering('title');
    }
  }, [grouping]);

  return (
    <div className="page">
      <Navbar 
        grouping={grouping} 
        ordering={ordering} 
        setGrouping={setGrouping} 
        setOrdering={setOrdering} 
      />
      <div className="board">
        {DATA[grouping].map((group) => (
          <div className="group-column" key={group.title}>
            <Title 
              title={group.title} 
              grouping={grouping} 
              count={group.tickets.length} 
              available={grouping === 'user' ? DATA.users.find((user) => user.name === group.title)?.available : null} 
            />
            {Order(group.tickets, ordering).map((ticket) => (
              <Card 
                key={ticket.id} 
                ticket={ticket} 
                grouping={grouping} 
                user={DATA.users.find((user) => user.id === ticket.userId)} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kanban;

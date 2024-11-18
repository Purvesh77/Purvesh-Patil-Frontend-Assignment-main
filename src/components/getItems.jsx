import axios from 'axios';

// Object to store the processed data
let DATA = {};

try {
  // Fetch data from the API
  const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
  const tickets = response.data.tickets;
  const users = response.data.users;

  // Organize tickets by status
  const statusCategories = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'].map(statusType => ({
    title: statusType,
    tickets: tickets.filter(ticket => ticket.status === statusType),
  }));

  // Organize tickets by user
  const userCategories = users.map(user => ({
    title: user.name,
    tickets: tickets.filter(ticket => ticket.userId === user.id),
  }));

  // Organize tickets by priority
  const priorityLevels = [
    { label: 'No priority', level: 0 },
    { label: 'Low', level: 1 },
    { label: 'Medium', level: 2 },
    { label: 'High', level: 3 },
    { label: 'Urgent', level: 4 },
  ].map(priority => ({
    title: priority.label,
    tickets: tickets.filter(ticket => ticket.priority === priority.level),
  }));

  // Populate the DATA object
  DATA = {
    status: statusCategories,
    user: userCategories,
    priority: priorityLevels,
    users: users,
  };
} catch (error) {
  // Handle errors gracefully
  DATA = { status: [], user: [], priority: [], users: [] };
}

export default DATA;

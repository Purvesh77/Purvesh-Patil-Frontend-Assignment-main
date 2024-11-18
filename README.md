# Quicksell Kanban Board

## Overview

This project is an interactive Kanban board application built with **ReactJS**. It dynamically fetches ticket data from the provided API and allows users to group and sort the tickets based on the following criteria:

### Grouping Options:
1. **By Status**: Tickets grouped based on their current status.
2. **By User**: Tickets grouped based on the assigned user.
3. **By Priority**: Tickets grouped based on priority levels.

### Sorting Options:
1. **Priority**: Sort tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order by title.

The application is responsive, visually appealing, and matches the provided design.

---

## Features

- **Dynamic Grouping**: Allows grouping by status, user, or priority.
- **Sorting Options**: Tickets can be sorted by priority or title.
- **Persistent State**: The view state is retained even after a page reload.
- **Priority Levels**:
  - 4 - Urgent
  - 3 - High
  - 2 - Medium
  - 1 - Low
  - 0 - No Priority
- **Responsive Design**: Works seamlessly across different devices.
- **Pure CSS**: Styled using only CSS without libraries.

---

## API Details

**Endpoint**: `https://api.quicksell.co/v1/internal/frontend-assignment`

The API returns ticket data to populate the Kanban board.


## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Purvesh77/Purvesh-Patil-Frontend-Assignment-main
   cd quicksell-frontend-assignment-main

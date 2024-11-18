function sortItems(items, sortBy) {
    // Sort items based on the specified parameter
    const sortedItems = [...items]; // Create a copy to avoid mutating the original array
  
    if (sortBy === 'title') {
      sortedItems.sort((itemA, itemB) => {
        const titleA = itemA.title.toLowerCase();
        const titleB = itemB.title.toLowerCase();
  
        return titleA.localeCompare(titleB); // Use localeCompare for case-insensitive comparison
      });
    } else if (sortBy === 'priority') {
      sortedItems.sort((itemA, itemB) => itemB.priority - itemA.priority); // Sort by priority in descending order
    }
  
    return sortedItems;
  }
  
  export default sortItems;
  
import React, { useState, useEffect, useRef } from 'react';
import './styles/Navbar.css';

const settingsIcon = '/icons/settings.svg';
const chevronIcon = '/icons/chevron-down.svg';

function Navbar({ grouping, ordering, setGrouping, setOrdering }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handle outside clicks to toggle dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(true);
      } else if (
        buttonRef.current && buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen((prev) => !prev);
      } else {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Capitalize the first letter of a word
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="navbar">
      <div className="display-container" ref={buttonRef}>
        <div className="display">
          <img src={settingsIcon} alt="Settings" />
          <span>Display</span>
          <img src={chevronIcon} alt="Chevron" />
        </div>
        {isDropdownOpen && (
          <div className="display-settings" ref={dropdownRef}>
            {/* Grouping Selector */}
            <div className="display-setting">
              <div>Grouping</div>
              <select
                value={capitalize(grouping)}
                onChange={(e) =>
                  setGrouping(
                    e.target.options[e.target.selectedIndex].dataset.id
                  )
                }
              >
                <option key="status" data-id="status">
                  Status
                </option>
                <option key="user" data-id="user">
                  User
                </option>
                <option key="priority" data-id="priority">
                  Priority
                </option>
              </select>
            </div>

            {/* Sorting Selector */}
            <div className="display-setting">
              <div>Sorting</div>
              <select
                value={capitalize(ordering)}
                onChange={(e) =>
                  setOrdering(
                    e.target.options[e.target.selectedIndex].dataset.id
                  )
                }
              >
                <option key="title" data-id="title">
                  Title
                </option>
                {grouping !== 'priority' && (
                  <option key="priority" data-id="priority">
                    Priority
                  </option>
                )}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

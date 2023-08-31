import React from 'react';

const Navbar = ({ onGetUsersClick }) => {
  return (
    <nav className="navbar">
      <div className="brand">Brand Name</div>
      <button className="get-users-button" onClick={onGetUsersClick}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function NavAsideIcon({ Icon }) {
  return (
    <div>
      <Link to="/login">
        <Icon className="Nav-Aside" />
      </Link>
    </div>
  );
}

export default NavAsideIcon;

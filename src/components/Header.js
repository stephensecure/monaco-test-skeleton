import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center bg-primary p-3">
        <h1 className="font-bold text-lg">Hacker News Clone</h1>
        <div>
          <NavLink to="/top" activeClassName="active">
            Top Stories
          </NavLink>
          <NavLink to="/new" activeClassName="active" className="px-4">
            Latest Stories
          </NavLink>
          <NavLink to="/best" activeClassName="active">
            Best Stories
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
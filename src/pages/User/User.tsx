import { NavLink, Outlet } from 'react-router-dom';

export const User = () => {
  return (
    <div>
      <h1>User Main</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to='register'>Register</NavLink>
        <NavLink to='listing'>Listing</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

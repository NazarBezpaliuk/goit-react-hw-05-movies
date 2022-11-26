import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './SharedLayout.css';

export default function SharedLayout() {
  return (
    <div className="container">
      <header className="header">
        <nav className="navigation">
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

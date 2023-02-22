import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
import { FaFilm } from 'react-icons/fa';
// BiCameraMovie;

export const Header = () => {
  return (
    <>
      <header>
        <FaFilm size="80px" color="#d15b0d" />
        <nav>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

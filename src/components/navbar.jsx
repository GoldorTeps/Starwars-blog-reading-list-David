import React from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../context/appContext';

export default function Navbar() {
  const { store } = useAppContext();
  const { favorites, removeFromFavorites } = store || {};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos ({favorites.length})
          </Link>
          <ul className="dropdown-menu">
            {favorites.map((fav, index) => (
              <li key={index}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{fav}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromFavorites(fav)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

import React, { useState } from 'react';
import useAppContext from '../context/appContext';
import { Link } from 'react-router-dom';

export default function Card({ img, title, content, to }) {
  const [isLiked, setIsLiked] = useState(false);
  const { store } = useAppContext();
  const { addToFavorites, removeFromFavorites } = store || {}; 

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (addToFavorites && removeFromFavorites) { 
      if (isLiked) {
        removeFromFavorites(title);
      } else {
        addToFavorites(title);
      }
    }
  };


  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className="btn btn-primary" onClick={toggleLike}>
          {isLiked ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </button>
        <Link to={to} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}


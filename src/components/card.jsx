  import React from 'react';
  import { Link } from 'react-router-dom'; 

  
  export default function Card({ img, title, content, to }) {
    
  
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <Link to={to} className="btn btn-primary">
            Ver detalles
          </Link>
        </div>
      </div>
    );
  }
  


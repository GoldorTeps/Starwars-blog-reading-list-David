import React from 'react';
import { Link } from 'react-router-dom'; 
import useAppContext from './context/appContext';

export default function DetailsCard({ img, title, content }) {
  const { store } = useAppContext();
  return (
    <div className="card mb-3" style={{ width: "540px;" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
          <div>
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

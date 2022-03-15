import React from 'react';
import { Link } from 'react-router-dom';
import './moviecard.scss';

export default function MovieCard(props) {
  const {data} = props;
  console.log(data);
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
  
}

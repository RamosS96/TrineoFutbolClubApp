import React from 'react';
import './NewsBadge.css';

const NewsBadge = ({ props }) => {
  return (
    <article>
      <div className="position-relative overflow-hidden">
        <img src={props.img} alt={`${props.title}`} className="img-top-badge" style={{"objectFit": "cover"}} />
        <div className="overlay">
          <div className="mb-1">
            <a className="text-dark" href={props.id}>{props.title}</a>
            <span className="px-2 text-dark">/</span>
            <a className="text-dark" href={props.id}>{props.date}</a>
          </div>
          <a className="h2 m-0 text-dark font-weight-bold" href={props.id}>{props.content}</a>
          <div>
            <p>{(props.content)}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsBadge;
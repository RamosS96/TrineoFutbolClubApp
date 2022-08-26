import React from 'react';


const NewsBadge = ({ props }) => {
  return (
    <article>
      <div className="position-relative overflow-hidden">
        <img src={props.img} alt={`${props.title}`} className="img-fluid h-100" style={{"objectFit": "cover"}} />
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
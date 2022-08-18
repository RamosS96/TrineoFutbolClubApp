import React from 'react';

const NewsBadge = ({ props }) => {
  return (
    <article>
      <div className="position-relative overflow-hidden">
        <img src={props.img} alt={`${props.title}`} className='' />
        <div className="overlay">
          <div className="mb-1">
            <a className="text-white" href="">{props.title}</a>
            <span className="px-2 text-white">/</span>
            <a className="text-white" href="">{props.date}</a>
          </div>
          <a className="h2 m-0 text-white font-weight-bold" href="">{props.content}</a>
        </div>
      </div>
    </article>
  );
};

export default NewsBadge;
import React from 'react';

export default function ProductComponent(props) {
  const { id, name, category } = props;
  return (
    <div className="mt-5">
      <div className="ui card">
        <div className="image">
          <img src="/images/avatar2/large/kristy.png" />
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div className="meta">
            <span className="date">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

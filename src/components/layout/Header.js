import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/" className="h2 text-dark text-decoration-none">
          Fake Eshop
        </Link>
      </div>
    </div>
  );
}

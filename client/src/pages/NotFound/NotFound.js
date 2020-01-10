import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className='NotFound'>
    <h1>Uh-oh!</h1>
    <p>
      Sorry, the page you requested cannot be found. <Link to='/'>Return to the home page</Link>.
    </p>
  </div>
);

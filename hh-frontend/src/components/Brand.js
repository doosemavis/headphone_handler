import React from 'react';
import { Link } from 'react-router-dom';

const Brand = (props) => {
    return (
      <li>
          <Link to={`/brands/${props.brand.id}`}>{props.brand.name}</Link>
      </li>
    )
}

export default Brand;
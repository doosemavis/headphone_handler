import React from 'react';
import { Link } from 'react-router-dom';

const Headphone = (props) => {
    return (
      <li>
          <Link to={`/headphones/${props.headphone.id}`}>{props.headphone.name}</Link>
      </li>
    )
}

export default Headphone;
import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

const Navigation = () => {
    return (
        <div>
            <NavLink 
                to='/'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgreen',
                }}
            > Home</NavLink>
            <NavLink 
                to='/brands'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgreen',
                }}
            > Brands</NavLink>
            <NavLink 
                to='/headphones'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgreen',
                }}
            > Headphones</NavLink>
        </div>
    )
}

export default Navigation;
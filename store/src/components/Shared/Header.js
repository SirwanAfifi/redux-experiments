import React from 'react';

const Header = (props) => {
    return <ul className="nav mb-5 mt-5">
        <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Products</a>
        </li>
    </ul>
}

export { Header }
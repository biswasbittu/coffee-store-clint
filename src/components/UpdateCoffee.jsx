import React from 'react';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
    return (
        <div>
            <Link to='/'><button className="btn btn-primary">Home</button></Link>
            <h1>Update-Coffee</h1>
        </div>
    );
};

export default UpdateCoffee;
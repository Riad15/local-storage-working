import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name, age, email, balance } = props.person;
    return (
        <div className='person'>
            <h3>name: {name} </h3>
            <h4>balance: {balance}</h4>
            <p> email: {email} </p>
            <button className='btn'>more information</button>
        </div>
    );
};

export default Person;
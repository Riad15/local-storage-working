import React from 'react';
import { addToData } from '../Storage/Storage';
import './Person.css'

const Person = (props) => {
    const { id, name, age, email, balance } = props.person;
    const moreInfo = () => {
        addToData(id);
    }
    return (
        <div className='person'>
            <h3>name: {name} </h3>
            <h4>balance: {balance}</h4>
            <p> email: {email} </p>
            <button className='btn' onClick={() => { moreInfo(id) }}>more information</button>
        </div>
    );
};

export default Person;
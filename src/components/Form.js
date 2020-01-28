import React, { useContext } from 'react';
import { JokeContext } from '../contexts/JokeContextProvider';
import { values } from '../asset/value';
import uuid from 'uuid/v1';
import chuck from '../img/chuck.png';

const Form = () => {

    const { selectValue, setSelectValue, handleSearchJoke, joke } = useContext(JokeContext);
    return (
        <>
            <h1 className="welcome">Chuck Norris App</h1>
            <h2 className="category">Category: </h2>
            <div className="select">
                <select onChange={e => setSelectValue(e.target.value)} value={selectValue}>
                    {values.map(item => (
                        <option key={uuid()} value={item}>{item}</option>
                    ))}
                </select>
                <button onClick={e => handleSearchJoke(e)} name='category'>Search by Category</button>
            </div>
            <div className="random">
                <button className="random" onClick={e => handleSearchJoke(e)} name='random'>Random !</button>
            </div>
            <h1 className='joke'>{joke ? joke : null}</h1>
            <img className='chuck' src={chuck} alt="chuck norris" />
        </>
    );
}

export default Form;
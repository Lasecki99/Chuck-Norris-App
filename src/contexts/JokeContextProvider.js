import React, { createContext, useState } from 'react';

export const JokeContext = createContext();

const JokeContextProvider = (props) => {

    const [selectValue, setSelectValue] = useState('animal');
    const [joke, setJoke] = useState('');

    const handleSearchJoke = e => {
        const target = e.target.name;
        if (target === 'category') {
            const value = selectValue.toLocaleLowerCase();
            fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
                .catch(err => alert(err))
                .then(response => response.json())
                .then(data => {
                    setJoke(data.value);
                });
        } else if (target === 'random') {
            fetch(`https://api.chucknorris.io/jokes/random`)
                .catch(err => alert(err))
                .then(response => response.json())
                .then(data => {
                    setJoke(data.value);
                });
        }
    }

    return (
        <JokeContext.Provider value={{ selectValue, setSelectValue, handleSearchJoke, joke }}>
            {props.children}
        </JokeContext.Provider>
    );
}

export default JokeContextProvider;
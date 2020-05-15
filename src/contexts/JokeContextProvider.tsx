import React, { createContext, useState } from 'react';

type FormProvider = {
  selectValue: string;
  setSelectValue: (value: string) => void;
  handleSearchJoke: (value: string) => void;
  joke: string;
};

export const JokeContext = createContext({} as FormProvider);

interface JokeContextProps {
  children: React.ReactNode;
}

const JokeContextProvider: React.FC<JokeContextProps> = ({ children }) => {
  const [selectValue, setSelectValue] = useState('animal');
  const [joke, setJoke] = useState('');

  const handleSearchJoke = async (name: string) => {
    const value = selectValue.toLocaleLowerCase();
    const URL =
      name === 'category'
        ? `https://api.chucknorris.io/jokes/random?category=${value}`
        : 'https://api.chucknorris.io/jokes/random';

    try {
      const res = await (await fetch(URL)).json();
      setJoke(res.value);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <JokeContext.Provider
      value={{ selectValue, setSelectValue, handleSearchJoke, joke }}
    >
      {children}
    </JokeContext.Provider>
  );
};

export default JokeContextProvider;

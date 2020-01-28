import React from 'react';
import Form from './Form';
import '../styles/Style.css';
import JokeContextProvider from '../contexts/JokeContextProvider';

const App = () => {
   return (
      <JokeContextProvider>
         <Form />
      </JokeContextProvider>
   );
}

export default App;

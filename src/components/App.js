import React, { Component } from 'react';
import Form from './Form'
import '../styles/Style.css'
import chuck from '../img/chuck.png'


class App extends Component {

   state = {
      selectCategory: 'animal',
      joke: '',

   }


   handleInputValue = (e) => {
      this.setState({
         inputText: e.target.value,
      })
   }

   handleCategoryValue = (e) => {
      const select = document.querySelector('select')
      this.setState({
         selectCategory: select.value
      })

   }

   handleSearchJoke = (e) => {
      e.preventDefault()




      if (e.target.name === 'category') {
         const API = `https://api.chucknorris.io/jokes/random?category=${this.state.selectCategory}`

         fetch(API)
            .catch(error => console.log(error))
            .then(response => response.json())
            .then(data => {
               this.setState({
                  joke: data.value
               })
            })
      } else if (e.target.name === 'random') {

         const API = `https://api.chucknorris.io/jokes/random`

         fetch(API)
            .catch(error => console.log(error))
            .then(response => response.json())
            .then(data => {
               this.setState({
                  joke: data.value
               })

            })
      }

   }

   render() {
      return (
         <>

            <Form
               search={this.handleSearchJoke}
               input={this.handleInputValue}
               category={this.handleCategoryValue}
            />

            <h1 className='joke'>{this.state.joke}</h1>

            <img className='chuck' src={chuck} alt="chuck norris" />


         </>
      );
   }

}

export default App;

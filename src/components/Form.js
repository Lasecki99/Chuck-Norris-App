import React from 'react';

const Form = (props) => {
    return (
        <>

            <h1 className="welcome">Chuck Norris App</h1>

            <h2 className="category">Category: </h2>


            <div className="select">

                <select onChange={props.category}>
                    <option value="animal">Animal</option>
                    <option value="career">Career</option>
                    <option value="celebrity">Celebrity</option>
                    <option value="dev">Dev</option>
                    <option value="explicit">Explicit</option>
                    <option value="fashion">Fashion</option>
                    <option value="food">Food</option>
                    <option value="history">History</option>
                    <option value="money">Money</option>
                    <option value="movie">Movie</option>
                    <option value="political">Political</option>
                    <option value="religion">Religion</option>
                    <option value="science">Science</option>
                    <option value="sport">Sport</option>
                    <option value="travel">Travel</option>

                </select>

                <button onClick={props.search} name='category' >Search by Category</button>


            </div>

            <div className="random">

                <button className="random" onClick={props.search} name='random'>Random !</button>
            </div>


        </>
    );
}

export default Form;
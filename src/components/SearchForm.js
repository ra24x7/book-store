import classes from './SearchForm.module.css'

import React, { useState } from 'react'
import DataBook from '../DataBook'

export default function SearchForm (props) {

    const[input,setInput] = useState('')
  
 
    const inputHandler = event => {
      const value = event.target.value;
      setInput(value);
    }

    const filteredBooks=DataBook.filter(value => value.title.toLowerCase().includes(input.toLowerCase()))
    

    const formHandler = (event) => {
        event.preventDefault();
        props.onFilter(filteredBooks)
     
     
    }

  return (
    <form onSubmit={formHandler} >
        <div>
            <input
            placeholder='Search by Title' 
            className={classes.searchinput}
            onChange={inputHandler}
            >
            </input>
            <button className={classes.button}>Search</button> 
        </div>
      
    </form>
  )
}

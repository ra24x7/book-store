

import React from 'react'
import BOOK_DATA from '../DataBook';
import classes from './CategoryNav.module.css'

function CategoryNav({ctgry, buttonClickHandler, setItems}) {
 
    return (
    <div>
      <button 
      onClick={() => setItems(BOOK_DATA)}
      className={classes.button}
      >
        All Genre</button>
      {ctgry.map(item =>
      
      <button 
      onClick={() => buttonClickHandler(item)}
      className={classes.button}> 
      {item}
      </button>
      )}
    
    </div>
 

  )
}
export default CategoryNav;
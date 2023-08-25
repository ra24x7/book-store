

import React from 'react'
import classes from './BookList.module.css'
import {Link} from 'react-router-dom'

function Booklist({data}) {

    return (
   
   <div className={classes.main}>

    {data.map(item => ( 
       
       <Link key= {item.id} className={classes.item} to={`/bookdetail/${item.id}`}>
            <div className={classes.imageContainer}> <img src={item.img} alt=""/></div>
            <div> 
                <div className={classes.title}> {item.title}</div>
                <div className={classes.author}>{item.author} </div>
                <div className={classes.price}> Rs.{item.price} </div>
            </div>
          
        </Link>

        ))
    }
    </div>
  )
}

export default Booklist
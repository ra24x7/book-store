import classes from './BookDetail.module.css';
import { useParams } from 'react-router-dom';



export default function BookDetail({data}) {

    const params = useParams();
    const bookFind = data.find((item) => item.id ===params.id)

  return (
    <div className={classes.main}>

        <div className={classes.image}><img src={bookFind.img} alt = ""/></div>
        
        <div>
            <div className={classes.title}>{bookFind.title}</div>
            <div className={classes.author}>By: {bookFind.author}</div>
            <div className={classes.price}>Rs.{bookFind.price}</div>
            <div className={classes.desc}>{bookFind.description}</div>
            <div className={classes.stock}> In stock: {bookFind.instock}</div>
            <div>
                <button  className={classes.button}>Buy</button>
                <button  className={classes.button}>Add to Cart</button>
            </div>
           
            <div className={classes.category}> Category: {bookFind.category}</div>
        </div>
       
    </div>
  

  )
}


import DataBook from '../DataBook'
import CategoryNav from './CategoryNav'
import Booklist from './Booklist'
import { useState } from 'react'
import classes from './Home.module.css'
import SearchForm from './SearchForm'
import RanQuotes from './RanQuotes'


function Home() {

  const [items, setItems] = useState(DataBook)

  const navCategories = [...new Set(DataBook.map(item => item.category))];

  const buttonClickHandler = (cat) => {
      const newList = DataBook.filter((value)=>value.category===cat)
      setItems(newList)
  }

  const filterHandler = (filter) => {
    setItems(filter)
  }


  return (

  <div className={classes.home}>
    <SearchForm onFilter={filterHandler}/>
    <h1 className={classes.heading}> </h1>
    <CategoryNav ctgry={navCategories} buttonClickHandler={buttonClickHandler} setItems ={setItems}/>
    <Booklist  data={items}/>
    <RanQuotes/>
  </div>
  );
}
export default Home;

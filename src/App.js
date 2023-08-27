
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import BookDetail from './components/BookDetail'
import DataBook from './DataBook'



const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/bookdetail/:id', element: <BookDetail data={DataBook}/>}
]);

function App() {

  return (
  <>
      <h1 className="heading">Wisdom Store</h1>
      <RouterProvider router={router}/>
  </>
  )
  
}
export default App;

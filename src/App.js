
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AddMoviePage from './components/addMovies/addMovie';
import RemoveMoviePage from './components/removeMovie/removeMovie';
import MovieShow from './components/showMovie/movieShow';
import {useEffect, useState} from 'react'

function App() {





  return (
    <div>
      <Router>
        <section className='menu-bar'>
          <div className='menu'>
            <li className='main'><Link to='/'>MainPage</Link></li>
            <li className='add'><Link to='/addMovie'>AddMoviePage</Link></li>
            <li className='remove'><Link to='/remove'>RemovePage</Link></li>
          </div>
        </section>
        <Routes>
          <Route path='/' element={<MovieShow/>}></Route>
          <Route path='/addMovie' element={<AddMoviePage/>}></Route>
          <Route path='/remove' element={<RemoveMoviePage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



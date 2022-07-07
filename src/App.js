import React, {useState } from 'react';
import { useEffect } from 'react';
import MovieList from './components/MovieList';
import SearchInput from './components/SearchInput';
import './App.css'


const API_URL = 'http://www.omdbapi.com?apikey=f899fe07'
function App() {
  const [listMovie,setList] = useState([]);
  const [input,setInput] = useState('');
  useEffect(()=>{
    fetch(`${API_URL}&s=all`)
      .then((respon)=>respon.json())
      .then((data)=>{
        setList(data.Search)
      })
  },[])
  const handleChange = (value)=>{
    setInput(value);
  }
  const handleClick = async ()=>{
    const response = await fetch(`${API_URL}&s=${input}`)
    const data = await response.json()
    setList(data.Search)
  }
  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <SearchInput inputValue={input} handleChange={handleChange} handleClick={handleClick}/>
      <MovieList list={listMovie}/>
    </div>
  )
}

export default App;
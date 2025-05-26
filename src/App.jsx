import React, { Component, useState, useEffect } from 'react'
import './App.css'
import './style.css'
import 'tachyons'
import { Robots as localRobots } from './Components/Robots'
import CardList from './Components/CardList'
import SearchBox from './Components/SearchBox'
import Scroll from './Components/Scroll'

const App = () => {
  const [search, setSearch] = useState('');
  const [robots, setRobots] = useState(localRobots);

    useEffect(() => {
    fetch('https://https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []); 

  const changeHandler = (e) => {
      setSearch(e.target.value);
  }

  const filterRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
     <h1>
        DEcipher_!T Robots
      </h1>
    <div>
      <SearchBox changeHandler={changeHandler}/>
      <Scroll>
        <CardList Robots={filterRobot}/>
      </Scroll>
      
    </div>
   
    </>
  )
}

export default App
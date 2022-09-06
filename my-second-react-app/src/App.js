
import './App.css';
import React from 'react';
import { useState } from 'react'
import Title from './components/Title';



function App() {
  const [showEvents, setShowEvents] = useState(true)
  
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "browser's live stream", id: 2},
    {title: "race on Moo moo Farm", id: 3}
  ])

  const handleClick = (id)=> {
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
   console.log(id)
  }
  return (
    <div className="App">
      <Title title="Events in your area" />
      { showEvents && (<div>
        <button onClick={()=>setShowEvents(false)}>Hide Events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={()=> setShowEvents(true)}>Show Events</button>
      </div>)}
     
      {showEvents && events.map((event)=> (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={()=> handleClick(event.id)}>Delete event</button>
        </div>
      ))}
      
    </div>
  );
}

export default App;

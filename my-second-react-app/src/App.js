
import './App.css';
import React from 'react';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';



function App() {
  const [showModal, setShowModal] = useState(false)
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

  const handleOpen= () =>{
    setShowModal(true)
  }

  const handleClose = () =>{
    setShowModal(false)
   
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
     
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      { showModal && <Modal handleClose={handleClose}>
      <h2> 10% Off Coupon Code!</h2>
        <p>Use the code NINJA10 at the check out</p>
      </Modal>}
      <div>

      <button onClick={handleOpen}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;

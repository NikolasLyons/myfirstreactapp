
import './App.css';
import React from 'react';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';



function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)

  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)

  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)

  }
  return (
    <div className="App">

      <Title title="Events in your area" />

      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      </div>)}

      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && <Modal handleClose={handleClose}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
      <div>

        <button onClick={handleOpen}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;

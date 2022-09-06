import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'id='modal'>
      <div className='modal'>
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  ), document.body)
}

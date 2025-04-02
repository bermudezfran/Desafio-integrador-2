import React from 'react'
import "../../sass/main.scss";

export const Modal = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;

  return (
    <div className="modal-open">
        <div className='modal-container'>
        <button className="modal-close-button" onClick={onClose}>
            X
        </button>
        <div className="modal-contenido">{children}</div>
        </div>
    </div>
  )
}

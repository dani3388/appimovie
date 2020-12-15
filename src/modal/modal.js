import React from 'react';
import './modal.css';

function Modal(props){
  return (
    <div className="Modal">
      {
        props.children
      }
      <div className="Modal-close" onClick={ props.handleClose }>
        {/* icono svg de la X*/}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M13.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3a1 1 0 0 0 0 1.4c.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"/>
        </svg>
      </div>
    </div>
  )
}
export default Modal;

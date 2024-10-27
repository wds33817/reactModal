import React from 'react';
import ReactDom from 'react-dom';

function Modal({ children, onClose }) {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    console.error('The portal-root element does not exist in the DOM.');
    return null;
  }
  return ReactDom.createPortal(
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}
export default Modal;

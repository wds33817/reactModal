import React from 'react';
import ReactDom from 'react-dom';

function Modal({ children, onClose }) {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    console.error('The portal-root element does not exist in the DOM.');
    return null;
  }
  return ReactDom.createPortal(
    <div className='custom-dialog-overlay'>
      <div className='custom-dialog'>
        <div className='custom-dialog-header'>
          <button onClick={onClose} className='close-button'>
            ×
          </button>
        </div>
        <div className='custom-dialog-body'>{children}</div>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}
export default Modal;

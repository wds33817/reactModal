import React, { useState } from 'react';
import Modal from './Modal';

export function App(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {!isModalOpen && (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
      
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h1> Hello from the Modal!</h1>
        </Modal>
      )}
    </div>
  );
}

// Log to console
//console.log('Hello console');

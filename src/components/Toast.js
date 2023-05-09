import React from 'react';
import './Toast.css';
import ToastMessage from './ToastMessage';

const Toast = ({ message }) => {
  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message}/>
      <button className="toast__button">Dismiss</button>
    </div>
  );
};

export default Toast;

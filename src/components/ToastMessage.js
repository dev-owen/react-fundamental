import React from "react";

const ToastMessage = ({ message }) => {
	return (
		<main className="toast__message">
			<p className="toast__message-title">{message.title}</p>
			<p className="toast__message-text">{message.text}</p>
		</main>
	);
};

export default ToastMessage;

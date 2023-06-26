import { useRef } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
	const taskInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredValue = taskInputRef.current.value;

		if (enteredValue.trim().length > 0) {
			props.onEnterTask(enteredValue);
		}
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<input type="text" ref={taskInputRef} />
			<button>{props.loading ? "보내는 중..." : "태스크 더하기"}</button>
		</form>
	);
};

export default TaskForm;

import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
	let taskList = <h2>태스크가 없습니다. 추가해주세요.</h2>;

	if (props.items.length > 0) {
		taskList = (
			<ul>
				{props.items.map((task) => (
					<TaskItem key={task.id}>{task.text}</TaskItem>
				))}
			</ul>
		);
	}

	let content = taskList;

	if (props.error) {
		content = <button onClick={props.onFetch}>다시 시도해주세요</button>;
	}

	if (props.loading) {
		content = "태스크 로딩중...";
	}

	return (
		<Section>
			<div className={classes.container}>{content}</div>
		</Section>
	);
};

export default Tasks;

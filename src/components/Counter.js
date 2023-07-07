import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- 카운터 값 --</div>
      <button onClick={toggleCounterHandler}>토글 카운터</button>
    </main>
  );
};

export default Counter;

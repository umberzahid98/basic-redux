import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {counterActions} from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch()
//  useselector is sed to get the piece of state that we neeed in this component
//  useselector will automaticaly setup the subscripion to store
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state)=> state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) // {type: SOME_UNIQUE_IDENTIFIER, payload: }
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div >
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decremnet</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

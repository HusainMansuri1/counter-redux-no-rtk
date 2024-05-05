import { useSelector, useDispatch } from 'react-redux'

import { counterIncrement, counterDecrement, counterReset } from "../redux/actions"

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    

  return (
    <div>
        <h3>Count: {counter}</h3>
        <button onClick={() => dispatch(counterIncrement())}> 👍 </button>
        <span>{`  `}</span>
        <button onClick={() => dispatch(counterDecrement())}> 👎 </button>
        <span>{`  `}</span>
        <button onClick={() => dispatch(counterReset())}> 🔄 </button>
    </div>
  )
}

export default Counter;
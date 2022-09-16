import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../store/slices/counter.slice"

export default function reduxCounter() {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const incrementar = () => {

        dispatch(increment())
    }
    const decrementar = () => {
        dispatch(decrement())
    }

    return <>
        <h2>{counter}</h2>
        <button onClick={incrementar}>incrementar</button>
        <button onClick={decrementar}>decrementar</button>
    </>

}
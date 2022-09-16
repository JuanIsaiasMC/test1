import { useDispatch } from "react-redux"
import { increment } from "../store/slices/counter.slice"

function Contador() {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment)}>increment contador</button>
        </div>
    )
}
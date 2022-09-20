import { filtersAnecdotes } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"
import store from "../store"

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const data = {
      searchValue: event.target.value,
      initialState: store.getState().anecdotes
    }
    dispatch(filtersAnecdotes(data))
    console.log('REAL STATE: ', store.getState())
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
import { useDispatch, useSelector } from "react-redux"
import { voteHandle } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import Filter from "./Filter"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.filter.length > 0 ? state.filter : state.anecdotes)
  const dispatch = useDispatch()
  
  const vote = (id, content) => {
    const anecdote = anecdotes.find(n => n.id === id)
    const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
    dispatch(voteHandle(id, newAnecdote))
    const notificationContent = `You've voted '${content}'`
    dispatch(setNotification(notificationContent, 5))
  }

  return(
    <div>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
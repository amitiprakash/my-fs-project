import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const AnecdoteDisplay = ({anecdote, votes}) => (
  <div>
    <p>{anecdote}</p>
    <p>{`has ${votes} votes`}</p>
  </div>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const randomValue = Math.floor(Math.random() * anecdotes.length);   
    setSelected(randomValue);
    
    
  }

  const addVote = () => {
    const copyOfPoints = [...points]
    copyOfPoints[selected] += 1; 
    console.log(copyOfPoints)
  }

  const getMaxValue = () => {
    return points.indexOf(Math.max.apply(null, points));
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteDisplay anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick = {addVote} text='Vote'/>
      <Button handleClick = {handleNextAnecdote} text='Next Anecdote'/>
      <h1>Anecdote with most votes</h1>
      <AnecdoteDisplay anecdote={anecdotes[getMaxValue()]} votes={points[getMaxValue()]} />
      

    </div>
  )
}

export default App

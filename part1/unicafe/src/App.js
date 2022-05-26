import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Heading = ({value}) => (
  <h1>{value}</h1>
)

const StatisticLine = ({text, value}) => (<tr><td>{text}</td><td>{value}</td></tr>)
const Statistics = (props) => {
  const total = props.good + props.bad +props.neutral;
  const average = total? (props.good - props.bad)/total : 0;
  const positive = props.good ? (props.good/total) * 100 : 0
  
  return(
    <div>
      <Heading value="Statistics" />
      {total ? 
      <table>
        <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} %`} />
        </tbody>
        
      </table>
    : <p>No Feedback given</p>}
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }
  return (
    <div>
      <Heading value="Give Feedback" />
      <Button handleClick = {handleGoodClick} text='Good'/>
      <Button handleClick = {handleNeutralClick} text='Neutral'/>
      <Button handleClick = {handleBadClick} text='Bad'/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App

import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  function findAve(tempGood, tempBad, tempNeu){
    let score = tempGood - tempBad
    let total = tempGood + tempBad + tempNeu
    return (score / total)
  }

  function findPercentPos(tempGood, tempBad, tempNeu){
    return (100* tempGood / (tempGood+tempBad+tempNeu))
  }

  function handleClick(type){
    let tempG = good
    let tempB = bad
    let tempN = neutral
    switch(type){
      case 'good':
        setGood(good + 1)
        tempG++
        break
      case 'neutral':
        setNeutral(neutral + 1)
        tempN++
        break
      case 'bad':
        setBad(bad + 1)
        tempB++
        break    
      default:
        break
    }
    setAverage(findAve(tempG, tempB, tempN))
    setPositive(findPercentPos(tempG, tempB, tempN))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={()=>handleClick('good')} />
      <Button text='neutral' handleClick={()=>handleClick('neutral')} />
      <Button text='bad' handleClick={()=>handleClick('bad')} />  
      <h1>statistics</h1>
      {(good || bad || neutral) ? (<Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive} />) : <div>No feedback given </div>}
      
    </div>
  )
}

export default App


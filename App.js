import React, { useState } from 'react'

const Statistics = (props) => {
	if (props.All === 0) {
    return (
      <div>
        <h1>No Feedback Given Now</h1>
      </div>
    )
	}

	return (
    <div>
      <h3>Good: {props.good}</h3>
      <h3>Neutral: {props.neutral}</h3>
      <h3>Bad: {props.bad}</h3>
      <h3>All: {props.All}</h3>
      <h3>Average: {props.average}</h3>
      <h3>Positive: {props.positive}</h3>
    </div>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

  function getAverage(good,bad,neutral){
    console.log(good,bad,neutral)
    return (good+bad+neutral)/3;
  }

  function getPostive(good,neutral){
    console.log(good,neutral)
    return (good+neutral)/2
  }

	return (

	<div>
    <h1>Feedback </h1>
    
    <button onClick = {() => setGood(good + 1)}>Good</button> &nbsp;&nbsp;
    <button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>&nbsp;&nbsp;
    <button onClick = {() => setBad(bad + 1)}>Bad</button>
    
    
    <h1>Statistics</h1>
    
    <Statistics
      good={good}
      neutral= {neutral}
      bad= {bad}
      All= {good + neutral + bad}

      average= { getAverage(good,bad,neutral)}
      positive= { getPostive(good,neutral)}
    />

	</div>
	)
}


export default App

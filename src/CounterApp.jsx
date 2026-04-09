import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0)

  function PlusMax10()
  {
    setCount( ( count ) =>
    {
      if ( count >= 10 ) return count
      return count + 1
    })
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={ () => setCount( ( count ) => count + 1 ) }>+</button>
      <button onClick={ () => setCount( ( count ) => count + 2 ) }>+2</button>
      <button onClick={ () => setCount( ( count ) => count - 1 ) }>-</button>
      <button onClick={ () => setCount( 0 ) }>reset</button>
      <button onClick={ () => setCount( ( count ) => count >= 10 ? count : count + 1 ) }>+( 최대 10까지 )</button>
      <button onClick={ () => setCount( ( count ) => Math.min( count + 1, 10 ) ) }>+( 최대 10까지 )</button>
      <button onClick={ () => setCount( PlusMax10() ) }>+( 최대 10까지 )</button>
      <button onClick={ PlusMax10 }>+( 최대 10까지 )</button>
      {/* <button
        className='counter'
        onClick={() => setCount(count + 1)}>
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp
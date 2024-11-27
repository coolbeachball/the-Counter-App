import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (  
      <div className='bg-primary d-flex align-items-center' id='container'>
        <div className='container bg-white col-lg-5 p-4 rounded d-flex justify-content-around align-items-center' id="counter">
            <button className="btn bg-danger text-white" id='Sub' onClick={() => setCount(count - 1)}>
              <h1 className='display-6 p-1'>-</h1>
            </button>
            <h1 className='bg-dark text-success col-lg-6 display-1 text-center rounded' id="count-el">{count}</h1>
            <button className="btn bg-success text-white" id='Add' onClick={() => setCount(count + 1)}>
              <h1 className='display-6 p-1'>+</h1>
            </button>
        </div>
      </div>
    )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/site.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React project 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Count down
        </button>
        <h2>My life today!</h2>
        <section className='pro-1'>
          <h3>Blogpost of today</h3>
          <textarea name="text" id="" cols="50" rows="10" placeholder='Write about your day'></textarea>
          <br></br>
          <button className='submit-btn'>Submit</button>
        </section>

        <section className='pro-2'>
          <input type="file" name="fileUpload" id="fileUpload" />
          <input type="submit" value="Upload file"/>
        </section>

        <section>
          <h3>Info</h3>
          <ul className='info'>
            <li><a href='#'>Call us</a></li>
            <li><a href='#'>Send request</a></li>
            <li><a href='#'>Email</a></li>
          </ul>
        </section>

        const root = ReactDOM.create(document.getElementById(`root`));
        root.render(<site/>)

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer>
        Made by Andreas Osdal
      </footer>
    </>
  )
}

export default App

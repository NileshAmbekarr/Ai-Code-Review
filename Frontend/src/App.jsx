import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import './App.css'
import Prism from "prismjs";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    Prism.highlightAll();
  }, [])

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <pre>
              <code className="language-javascript">
                {`fumction sum(){ return a+b}`}
              </code>
            </pre>
          </div>
          <div className="review">Review</div>
        </div>
        <div className="right"></div>
        
      </main>
    
    </>
  )
}

export default App

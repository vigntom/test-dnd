import React from 'react'
import ReactDOM from 'react-dom'
import Example from './example'
import { DndProvider } from 'react-dnd'
//import HTML5Backend from 'react-dnd-html5-backend'
import Backend from 'react-dnd-mouse-backend'

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Reducer from './Share/Reducer.tsx'
import Data from './Share/Data.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Data>
    <Reducer>
      <App />
    </Reducer>
  </Data>
)

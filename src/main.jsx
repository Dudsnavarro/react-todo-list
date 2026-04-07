import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ToDoProvider} from './components/ToDoProvider/index.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ToDoProvider>
      <App />
    </ToDoProvider>
  </StrictMode>,
)

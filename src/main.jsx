import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoListContext from './Context/TodoListContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <TodoListContext>
  <App />
  </TodoListContext>
  </StrictMode>,
)

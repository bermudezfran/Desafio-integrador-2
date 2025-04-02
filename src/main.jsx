import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import IndexRoute from './routes/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexRoute>
      <App />
    </IndexRoute>
  </StrictMode>,
)

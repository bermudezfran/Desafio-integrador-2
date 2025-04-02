import { Link } from 'react-router-dom'
import './App.css'
import IndexRoute from './routes/Route'

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Esta es la pagina de inicio</h1>
      <Link to={'/nosotros'}>Nosotros</Link>
      <Link to={'/contacto'}>Contacto</Link>
    </div>
  )
}

export default App

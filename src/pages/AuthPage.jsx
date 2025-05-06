import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore'
import { Header } from '../components/Header'

export default function AuthPage() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [register, setRegister] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión')
    }
  }

  return (<>
    <Header theme={theme} onToggleTheme={toggleTheme} />
    <div className='container-auth'>
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Iniciar sesión</h2>
      {error && <p className="error">{error}</p>}
      {
        register && (
            <input className='input' placeholder='nombre' type='text' value={name} onChange={e => setName(e.target.value)} required />
        )
      }
      <input
      className='input'
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
      className='input'
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit" className='button-submit'>Entrar</button>
      <p>
        ¿No tenes cuenta? <span className='register' onClick={() => setRegister((e) => !e)}>{register ?  'Regístrate' : 'Iniciá sesion'}</span>
      </p>
    </form>
    </div>
    </>
  )
}

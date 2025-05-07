import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useDropzone } from 'react-dropzone'
import { Header } from '../components/Header'

export default function AddProduct() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',        
    description: ''
  })
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log('🛑 onDrop fired:', acceptedFiles)
    if (!acceptedFiles?.length) return
    const file = acceptedFiles[0]

    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result)
    reader.readAsDataURL(file)

    const data = new FormData()
    data.append('image', file)
    try {
      const { data: res } = await api.post('/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setForm(f => ({ ...f, image: res.url }))
    } catch (err) {
      console.error('Error subiendo imagen:', err)
      setError('No se pudo subir la imagen.')
    }
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open
  } = useDropzone({
    onDrop,
    accept: 'image/*',    
    multiple: false,
    noKeyboard: true,
    noClick: true       
  })

  const onChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.image) return setError('Debes subir una imagen.')
    setError('')
    setLoading(true)
    try {
      await api.post('/products', {
        name: form.name,
        price: parseFloat(form.price),
        image: form.image,
        description: form.description
      })
      setLoading(false)
      navigate('/')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || err.message)
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className="add-product-container">
        <h2>Agregar nuevo producto</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="add-product-form">
          <input
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Precio"
            value={form.price}
            onChange={onChange}
            required
          />

          <div
            {...getRootProps({
              className: `dropzone ${isDragActive ? 'active' : ''}`
            })}
            onClick={open} 
          >
            <input {...getInputProps()} />
            {preview ? (
              <img src={preview} alt="preview" className="preview-img" />
            ) : (
              <p>
                {isDragActive
                  ? 'Suelta la imagen aquí...'
                  : 'Arrastra una imagen o haz click para seleccionar'}
              </p>
            )}
          </div>

          <textarea
            name="description"
            placeholder="Descripción"
            value={form.description}
            onChange={onChange}
          />

          <button type="submit" disabled={loading} className="button-submit">
            {loading ? 'Guardando...' : 'Guardar producto'}
          </button>
        </form>
      </div>
    </>
  )
}

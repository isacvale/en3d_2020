import React, { useState } from 'react'
import './Footer.css'

const Footer = props => {
  const [nome, setNome]= useState('')
  const [email, setEmail]= useState('')
  const [mensagem, setMensagem]= useState('')

  const encode = data =>
    Object.entries(data)
      .map(entry => `${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}`)
      .join('&')

  return (
    <section className='Footer'>
      <h1 data-inverted>Entre em contato</h1>
      <form
        className='Footer__Form'
        name='contato'
        method='POST'
        data-netlify='true'
      >
        <input
          type="hidden"
          name="form-name"
          value="contato"
        />

        <label>
          <span className='Footer__FormLabel'>Seu nome:</span>
          <input
            className='Footer__FormInput'
            type='text'
            name='nome'
            value={nome}
            onChange={ev => setNome(ev.target.value)}
          />
        </label>

        <label>
          <span className='Footer__FormLabel'>Seu email:</span>
          <input
            className='Footer__FormInput'
            type='email' 
            name='email'
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
        </label>

        <label>
          <span className='Footer__FormLabel'>Sua mensagem:</span>
          <textarea
            className='Footer__FormInput'
            name='mensagem'
            value={mensagem}
            onChange={ev => setMensagem(ev.target.value)}
          />
        </label>

        <button type="submit">Enviar</button>
        <button
          type="button"
          onClick={ev => fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encode({
              'form-name': 'contato',
              nome,
              email,
              mensagem
            })
          })}
        >
          Via code
        </button>
      </form>
    </section>
  )
}

export default Footer
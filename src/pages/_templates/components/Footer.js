import React from 'react'
import './Footer.css'

const Footer = props => {
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
          <input className='Footer__FormInput' type='text' name='nome' />
        </label>

        <label>
          <span className='Footer__FormLabel'>Seu email:</span>
          <input className='Footer__FormInput' type='email' name='email' />
        </label>

        <label>
          <span className='Footer__FormLabel'>Sua mensagem:</span>
          <textarea className='Footer__FormInput' name='mansagem' />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Footer
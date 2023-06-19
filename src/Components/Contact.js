import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Sending...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)

    emailjs.send(
      'service_bhx210k',
      'template_abdis1d',
      conFom,
      '9ar79VyzGfuTKmXF3'
    )
    
  }
  return (
    <div className='box' id='contact'>
      <h3>Contact us</h3>
      <p>write us your query</p>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          className='email'
          placeholder='enter your email'
          id='email'
        />
        <input
          type='string'
          name='name'
          className='email'
          placeholder='enter your Name'
          id='name'
        />
        <input
          type='text'
          name='message'
          className='email'
          placeholder='Enter message'
          id='message'
        />
        <input type='submit' value={formStatus} className='btn' />
      </form>
    </div>
  )
}

export default Contact

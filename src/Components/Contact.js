import React, { useState } from 'react'
import axios from 'axios'

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
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3002/send',
    //   data: conFom,
    // }).then((response) => {
    //   if (response.data.status === 'success') {
    //     alert('Message Sent.')
    //     setFormStatus('Sent')
    //   } else if (response.data.status === 'fail') {
    //     alert('Message failed to send.')
    //   }
    // })
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

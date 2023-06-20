import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = e.target.elements
    let conFom = {
      user_name: name.value,
      user_email: email.value,
      message: message.value,
    }
    console.log(conFom)
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        conFom,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success('Message Recieved! We will get back to you shortly!', {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log(error.text)
          alert('FAILED...', error)
        }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='string'
          name='name'
          className='email'
          placeholder='enter your Name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          name='message'
          className='email'
          placeholder='Enter message'
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type='submit' value='Send' className='btn' />
      </form>
    </div>
  )
}

export default Contact

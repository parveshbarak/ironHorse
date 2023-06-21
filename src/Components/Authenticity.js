import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs, getDoc, doc } from '@firebase/firestore'
import { firestore } from '../firebase'

const Authenticity = () => {
  const [code, setCode] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('code', code)
    // const ref = collection(firestore, 'authCodes')
    const ref2 = doc(firestore, 'authCodes', 'Hello1')
    // let data = {
    //   code: code,
    // }
    // try {
    //   addDoc(ref, data)
    //   console.log('data', data)
    // } catch (err) {
    //   console.log(err)
    // }
    // const docSnap = await getDocs(ref)
    // docSnap.forEach((doc) => {
    //   console.log('doc.data()', doc.data())
    // })

    const snap = await getDoc(ref2)
    console.log('snap', snap.data())
  }
  return (
    <section className='aunthenticity' id='aunthenticity'>
      <div className='information'>
        <span>aunthenticity check</span>
        <h3>test authenticity of your product!</h3>
        <img src='images/prod1.png' alt='prod1' />
      </div>

      <div className='plan basic'>
        <h3>authenticity Check</h3>
        <div className='info'>
          <p>
            We care about you and want you to consume only authentic product
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
            esse temporibus eaque illo voluptatem nostrum, at, quo nobis numquam
            aspernatur sunt fugiat veritatis dolorum hic tempora fugit
            consectetur officia?
          </p>
        </div>
        <div className='price'>Enter Auth Code</div>
        <div className='form'>
          <form onSubmit={onSubmit}>
            <input
              type='string'
              name='code'
              className='code'
              placeholder='enter Auth code'
              id='code'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <input type='submit' value='Check' className='btn' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Authenticity

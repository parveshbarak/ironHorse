import React from 'react'

const RealFake = () => {
  return (
    <section className='realFake' id='realFake'>
      <h1 className='heading'>
        <span>Real vs Fake</span>
      </h1>
      <div className='container extra-mg'>
        <h1>Authenticity Code</h1>
        <div className='row'>
          <div className='column'>
            <img src='/images/prod2.jpeg' alt='hello1' />
            <h3>
              Real ironHorse{' '}
              <i
                class='fa fa-check fa-lg'
                style={{ color: 'green' }}
                aria-hidden='true'
              ></i>{' '}
            </h3>
            <p>
              All Iron Horse products have a unique authenticity code for
              verification.
            </p>
          </div>
          <div className='column'>
            <img src='/images/h1.jpeg' alt='hello1' />
            <h3>
              Fake ironHorse{' '}
              <i
                class='fa fa-times fa-lg'
                style={{ color: 'red' }}
                aria-hidden='true'
              ></i>{' '}
            </h3>
            <p>
              Counterfeit items lack the authenticity code, indicating their
              inauthenticity.
            </p>
          </div>
        </div>
      </div>
      <div className='container extra-mg'>
        <h1>Dosage Strength</h1>
        <div className='row'>
          <div className='column'>
            <img src='/images/prod2.jpeg' alt='hello1' />
            <h3>
              Real ironHorse{' '}
              <i
                class='fa fa-check fa-lg'
                style={{ color: 'green' }}
                aria-hidden='true'
              ></i>{' '}
            </h3>
            <p>
              Genuine Winny (IronHorse Orignal) has a verified dosage strength
              of 100mg/ml.
            </p>
          </div>
          <div className='column'>
            <img src='/images/h1.jpeg' alt='hello1' />
            <h3>
              Fake ironHorse{' '}
              <i
                class='fa fa-times fa-lg'
                style={{ color: 'red' }}
                aria-hidden='true'
              ></i>{' '}
            </h3>
            <p>
              Counterfeit Winny is labeled with a dosage strength of 250mg/ml.
            </p>
          </div>
        </div>
      </div>
      <div className='container extra-mg'>
        <h1>Side Profile and Address</h1>
        <div className='row'>
          <div className='column'>
            <img src='/images/prod2.jpeg' alt='hello1' />
            <h3>
              Real ironHorse{' '}
              <i
                class='fa fa-check fa-lg'
                style={{ color: 'green' }}
                aria-hidden='true'
              ></i>{' '}
            </h3>
            <p>
              1The authentic injectable (ironHOrse Orignal) box features our
              verified address: Vogelrute 43, 53879 Euskirchen, Germany.
            </p>
          </div>
          <div className='column'>
            <img src='/images/h1.jpeg' alt='hello1' />
            <h3>
              Fake ironHorse{' '}
              <i
                class='fa fa-times fa-lg'
                style={{ color: 'red' }}
                aria-hidden='true'
              ></i>{' '}
            </h3>
            <p>
              The side profile of the counterfeit injectable box may display a
              different address, not matching the genuine product.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealFake

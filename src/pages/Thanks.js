import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Thanks() {
  return (
    <div className='flex justify-content-center m-4'>
      <h1>Message Received</h1>
      <p>Thank you for reaching out to me. I will respond ASAP!</p>
      <Link
        to='/'
        className='btn btn-outline-light btn-lg'
        style={{ maxWidth: '15.625rem', maxHeight: '4.25rem', margin: 'auto' }}
      >
        Go back to homepage
      </Link>
    </div>
  )
}

export default Thanks
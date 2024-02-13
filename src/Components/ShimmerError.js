import React from 'react'
import { Link } from 'react-router-dom'
const ShimmerError = () => {
  return (
    <div className='error'>
        <div>
          <img src="https://cdn.dribbble.com/userupload/4060800/file/original-e5ddcde7a251eb4480288135b6c7d98f.png?resize=1200x900" alt="" />
          <div className='error-page'>
            <p>Go back to home page!</p>
            <a href='#'><Link to="/body">Home</Link></a>
          </div>
        </div>
    </div>
  )
}

export default ShimmerError
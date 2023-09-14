import React from 'react';
import './style/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-8'>
        <div className='sub-bar mb-3'>
    <input type='Email' className='sub-input' placeholder='Enter your Email'></input>

    <button class="btn "> Subscribe </button>
    </div>

        </div>
          <h5 className='mt-3 mb-3'>Copyright © 2023, by Abdelrahman Abdelaziz</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
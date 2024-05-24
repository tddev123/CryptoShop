import React from 'react'

const Header = () => {
  return (
    <header className="header">

<img className="lefth" src=".\icons8-crypto-48.png" alt="" />
     
      <div>
      <a href='/' className='midh'>Crypto Exchange</a>
      <a href='/Card' className='midh'>Crypto Wallet</a>
      </div>
      <div className='righth'> 
      <h3 className='login'> 
      Login
      </h3>
      </div>

      
    </header>
    
  )
}

export default Header
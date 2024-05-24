import React, { useState } from 'react';

const WalletBalance = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='balance'>
      <div className='dropdown-header' onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
        <img className='balanceimg' src="./icons8-crypto-wallet-64.png" alt="" />
        <span className='dropdown-arrow'></span>
      </div>
      {isDropdownVisible && (
        <div className='dropdown-content'>
          <p className='balancenum'>Cash = $2,034</p>
          <div className='img2'>
            <img className='balanceimg2' src="./icons8-bitcoin-48.png" alt=""/>
            <p> = 2.567</p>
          </div>
          <div className='img3'>
            <img className='balanceimg3' src="./icons8-ethereum-100.png" alt="" />
            <p> = 5.225</p>
          </div>
          <div className='img4'>
            <img className='balanceimg4' src="./icons8-tether-48.png" alt="" />
            <p> = 9.541</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletBalance;


import React, { useState } from 'react';
import './CreditCardCss.css'; // Import CSS file for styling
import Wallet from './Wallet';
import Header from './Header';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'cardHolder':
        setCardHolder(value);
        break;
      case 'expiryDate':
        setExpiryDate(value);
        break;
      case 'cvv':
        setCvv(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submitting credit card info:', { cardNumber, cardHolder, expiryDate, cvv });
    
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvv('');
  };

  return (

    
    
    <body className='creditpagebody'>
      


     
      
      
      <Header/>

      <div className='wallet'>
<Wallet/>
</div>


    
    <div className="container">


    
    
    
     
      <form onSubmit={handleSubmit} className="credit-card-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
            maxLength={16}
            placeholder="Enter card number"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={cardHolder}
            onChange={handleInputChange}
            placeholder="Enter card holder name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={handleInputChange}
            maxLength={5}
            placeholder="MM/YY"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleInputChange}
            maxLength={3}
            placeholder="Enter CVV"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </body>
  );
};

export default CreditCardForm;

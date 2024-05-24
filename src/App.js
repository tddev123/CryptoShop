



import React from 'react';
import CryptoDisplay from './Components/CryptoDisplay';
import CreditCardForm from './Components/CreditCardForm';



function App() {
  let Component

  switch(window.location.pathname) {
    case "/":
      Component = CryptoDisplay
      break
      
      case "/Card":
        Component = CreditCardForm
        break


  }
  return (
    <div className="App">
      

      
     
      <Component />

    


    </div>
  );
}

export default App;

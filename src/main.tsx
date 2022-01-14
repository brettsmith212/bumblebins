import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './auth-context'
import { loadStripe } from '@stripe/stripe-js';

( async () => {

// const {publishableKey} = await fetch('/config').then(r=> r.json())
// const stripePromise = loadStripe('');

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
)

})()
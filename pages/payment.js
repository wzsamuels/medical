import {H1, H2, H3} from '../components/atoms/Typography';
import Card from '../components/atoms/Card';
import Link from 'next/link'
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import InputLabelContainer from '../components/atoms/InputLabelContainer';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Payment = () => {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  return (
    <>
      <H1>Make a payment</H1>
      <H2 style={{textAlign: "center"}}><Link href='/signin'><a>Sign in</a></Link> to see payment history.</H2>
      <Card width='600px'>
        <H3>Patient Code</H3>
        <InputLabelContainer>
          <Input style={{border: '1px solid #e6e6e6', backgroundColor: "#fff", borderRadius: "5px", boxShadow: "0px 1px 1px rgb(0 0 0 / 3%), 0px 3px 6px rgb(0 0 0 / 2%)"}} type="text"/>
        </InputLabelContainer>
        <H3>Card Credit</H3>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </Card>
      <H3 style={{margin:'2em 1em', textAlign: "center"}}>Note: this site is a demo. No services are provided, no payments are received, and no credit card information is collected.</H3>
    </>
  )
}


export default Payment
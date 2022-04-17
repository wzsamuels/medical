import {H1, H2, H3} from '../components/atoms/Typography';
import Card from '../components/atoms/Card';
import Link from 'next/link'

const Payment = () => {
  return (
    <>
      <H1>Make a payment</H1>
      <H2><Link href='/signin'><a>Sign in</a></Link> to see payment history.</H2>
      <Card width='600px'>
        <H3>Card Credit</H3>
        {/*<PaymentForm/>*/}
      </Card>
      <H3 style={{margin:'1em'}}>Note: this site is a demo. No services are provided, no payments are received, and no credit card information is collected.</H3>
    </>
  )
}

export default Payment
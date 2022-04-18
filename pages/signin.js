import AuthForm from '../components/auth/AuthForm';
import Card from '../components/atoms/Card';

const Signin = () => {
  return (
    <Card style={{MaxWidth:'800px', margin: '1em'}}>
      <AuthForm route='/account'/>
    </Card>
  )
}

export default Signin
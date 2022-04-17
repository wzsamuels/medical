import AuthForm from '../components/auth/AuthForm';
import Card from '../components/atoms/Card';

const Signin = ({setUser}) => {
  return (
    <Card style={{width:'400px'}}>
      <AuthForm setUser={setUser} route='/account'/>
    </Card>
  )
}

export default Signin

// ** components
import { Breadcrump } from "../components"
import LoginForm from "../components/apps/LoginForm"

// ** hooks
import { useBackToTop } from "../hooks/useBackToTop"
// ** styles 
import '../style/regester.css'

const Login = () => {

  useBackToTop()
  
  return (
    <div>
        <Breadcrump slug="User Login"/>
        <LoginForm/>
    </div>
  )
}

export default Login
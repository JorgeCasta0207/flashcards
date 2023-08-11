import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>Login
      <Link to='/Signup'><p className="text-blue">Link to Sign up</p></Link>
      {/*why text color no work?*/}
    </div>
  )
}
export default Login
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/vecteezy_man-using-laptop-user-is-logging-in-with-a-username-and_28045141_321.png'
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const { resetPassword } = useContext(AuthContext);
  const [succes, setSucces] = useState();
  const [error, setError] = useState();
  const emailRef = useRef()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();
    setSucces('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        const loggedUser = {
          email: user.email
        }
        console.log(loggedUser);
     
        fetch('http://localhost:7000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loggedUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          localStorage.setItem('car-token', data.token);
             navigate(from, {replace: true})
        })
        setSucces('Login is Succesfully.....')
        setError('');
        form.reset();
      })
      .catch(error => {
        setError(error.message)
        setSucces('');
      })
  }

  const forgatePassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert('Please Provide Your Current Email Address then reset Password')
    }
    resetPassword(email)
        alert('Please Check Your Email')
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-20 w-1/3 ">

          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <div className="card-body">
            <h1 className="text-3xl text-center  font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' ref={emailRef} placeholder="Type Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Type Your Password" className="input input-bordered" />
                <label className="label">
                  <a href="#" onClick={forgatePassword} className="text-red-500 label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">

                <input className='btn btn-error' type="submit" value="Login" />
              </div>
            </form>
            <p className='my-4 text-center'>New To Car Mechanic <Link className='text-red-500 font-bold' to="/signup">Sign Up</Link></p>
            <p className='text-success text-center font-semibold '>{succes}</p>
            <p className='text-error text-center font-semibold'>{error}</p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
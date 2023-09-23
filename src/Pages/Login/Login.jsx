import { Link } from 'react-router-dom';
import img from '../../assets/images/login/vecteezy_man-using-laptop-user-is-logging-in-with-a-username-and_28045141_321.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [succes, setSucces] = useState();
  const [error, setError] = useState();

  const handleLogin = event => {
    event.preventDefault();
    setSucces('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setSucces('Login is Succesfully.....')
        setError('');
        form.reset();
      })
      .catch(error => {
        setError(error.message)
        setSucces('');
  })

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
              <input type="email" name='email' placeholder="Type Your Email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="Type Your Password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="text-red-500 label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">

              <input className='btn btn-error' type="submit" value="Login" />
            </div>
          </form>
          <p className='my-4 text-center'>New To Car Mechanic <Link className='text-red-500 font-bold' to="/signup">Sign Up</Link></p>
          <p className='text-success text-center font-semibold '>{succes}</p>
          <p className='text-error text-center font-semibold'>{error}</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Login;
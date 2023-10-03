
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const {emailVarify} = useContext(AuthContext);
    const [succes, setSucces] = useState();
    const [error, setError] = useState();

    const handleSignUp = event => {
        event.preventDefault();
        setSucces('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 8){
            setError('Please Password atleast 8 character')
            return;
        }
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSucces('User Created Succesfully');
                setError('');
                form.reset();
                emailVarify(user)
                .then(result => {
                  console.log(result)
                  alert('Please varify Your Email')
                })
      
            })
            .catch(error =>{  
                setError(error.message);
                setSucces('');
            });

        

    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20 w-1/2">

                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-3xl text-center  font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className='btn btn-error' type="submit" value="Submit" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have a Account <Link className='text-red-500 font-bold' to="/login">Login</Link></p>
                        <p className='text-success text-center'>{succes}</p>
                        <p className='text-error text-center'>{error}</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
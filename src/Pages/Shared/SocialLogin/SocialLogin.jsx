
// import { FcGoogle} from "react-icons/fc";

import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                
                console.log(result)
            })
            .catch((error) => {
              error
                
            });
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-circle   mr-2 ">G</button>
                <button className="btn btn-circle btn-outline bg-blue-500">F</button>
            </div>

        </div>
    );
};

export default SocialLogin;
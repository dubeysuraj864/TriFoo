import "../styles/Login.css";
import {BsFacebook, BsGoogle, BsLinkedin} from "react-icons/bs";

function Login() {
    return ( 
        <>
        <div className="login">
            <div className="left">
            <h1>Login to Your Account</h1>
            <h3>Login using Social Networks</h3>
             <div className="icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><BsFacebook /></a>
                <a href="https://accounts.google.com/v3/signin/identifier?dsh=S520597316%3A1663303449968779&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession" target="_blank" rel="noreferrer" ><BsGoogle /></a>
                <a href="https://www.linkedin.com/checkpoint/rm/sign-in-another-account?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F" target="_blank" rel="noreferrer"><BsLinkedin /></a>
             </div>
            <form >
            <input type="text" placeholder="Full Name" />
             <input type="password" placeholder="Password" />
             <button type="submit">Sign In</button>
            </form>

            </div>
            <div className="right">
                <h1>New Here?</h1>
                <h3>Sign up and discover a great amount of <br /> new opportunities!</h3>
                <form >
                <button>Sign Up</button>
                </form>
            </div>
        </div>
        </>
     );
}

export default Login;

import "./login.scss";

export default function Login() {

  
    return (
        <div className="login">
        <div className="top">
        <div className="wrapper"> 
        <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/SW_logo_plantilla.png"
            alt=""
          />
         
          </div>
          
        
        </div>
        <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            />
          
              <input
            type="password"
            placeholder="Password"
        
          />
          <button className="loginButton" >
            Sign In
          </button> 
            <span>
            New to Stream world? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
         </form>
        </div>
        </div>
    );
}

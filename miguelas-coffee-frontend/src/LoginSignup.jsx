import axios from "axios";
import { useState } from "react";

function LoginSignup(){
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [modal, setModal] = useState(false);

   function signup (){
        axios.post("http://localhost:3636/user/signup", {username:username, password:password})
        .then(({data}) => {
            alert(data.message);
        }).catch((err) => {console.log(err)})

    }

    function login(){
        axios.post("http://localhost:3636/user/login", {username:username, password:password})
        .then(({data}) => {
            if(data.message == true){
                alert("welcome");
            }
            else{
                alert(data.message);
            }
        })
        .catch((err) => {console.log(err)})
    }

    function toggleModal(){
        setModal(!modal);
    }

    return(

        <div>
            {modal ? (
                <section className="signup-login-section">

                <form className="login-form">
                    <h1>Login</h1>
                    <div>
                        <div>
                            <label htmlFor="" className="input-labels">Username</label>
                            <input className="login-inputs" type="name" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
            
                        <div>
                        <label htmlFor="" className="input-labels">Password</label>
                            <input className="login-inputs" type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                    </div>
                    <div>
                        <button id="login-button" onClick={() => {login()}}>Login</button>
                    </div>
                </form>



                
                <div className="signup-section">
                    <h1 className="signup-section-header-one">Welcome To Login</h1>
                    <h4 className="signup-section-header-four">Don't have an account?</h4>
                    <button className="signup-button" onClick={toggleModal}>Sign Up</button>
                </div>

                <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form className="signup-form">
                <h1>Signup</h1>

                    <div>

                        <div>
                        <input className="login-inputs" type="name" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
            
                        <div>
                            <input className="login-inputs" type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>

                    </div>

                    <div>
                        <button id="signup-button" onClick={() => {signup()}}>Signup</button>
                    </div>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>


            </section>
            ) : (
                <section className="signup-login-section">

                <form className="login-form">
                    <h1>Login</h1>
                    <div>
                        <div>
                            <label htmlFor="" className="input-labels">Username</label>
                            <input className="login-inputs" type="name" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
            
                        <div>
                        <label htmlFor="" className="input-labels">Password</label>
                            <input className="login-inputs" type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                    </div>
                    <div>
                        <button id="login-button" onClick={() => {login()}}>Login</button>
                    </div>
                </form>
                <div className="signup-section">
                    <h1 className="signup-section-header-one">Welcome To Login</h1>
                    <h4 className="signup-section-header-four">Don't have an account?</h4>
                    <button className="signup-button" onClick={toggleModal}>Sign Up</button>
                </div>
            </section>
            )}
        </div>

       
    );
}
export default LoginSignup;
import axios from "axios";
import { useState } from "react";

function LoginSignup(){
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    function signup(){
        axios.post("http://localhost:3636/user/signup", {username:username, password:password})
             .then(({data}) => {
                if(data.message !== true){
                    alert(data.message);
                }
             });
    }

    function login(){
        axios.post("http://localhost:3636/user/signup", {username:username, password:password})
    }

    return(
        <section className="signup-login-section">


            <form className="signup-form">
                <h1>Signup</h1>

                    <div>

                        <div>
                        <input type="name" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
            
                        <div>
                            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>

                    </div>

                    <div>
                        <button onClick={() => {signup()}}>Signup</button>
                    </div>

            </form>





            <form className="login-form">
                <h1>Login</h1>
                <div>
                    <div>
                    <input type="name" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/>
                    </div>
        
                    <div>
                        <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                </div>
                <div>
                    <button onClick={() => {login()}}>Login</button>
                </div>
            </form>



        </section>
    );
}
export default LoginSignup;
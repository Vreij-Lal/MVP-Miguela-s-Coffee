function LoginSignup(){
    return(
        <section className="login-signup-section">
            <form className="login-form">
                <h1>Login</h1>
                <div>
                    <div>
                    <input type="email" placeholder="Email" autocomplete="nope"/>
                    </div>
        
                    <div>
                        <input type="password" placeholder="Password" autocomplete="new-password"/>
                    </div>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>

            <form className="signup-form">
                <h1>Sign up</h1>
                <div>
                    <div>
                    <input type="email" placeholder="Email" autocomplete="nope"/>
                    </div>
        
                    <div>
                        <input type="password" placeholder="Password" autocomplete="new-password"/>
                    </div>
                </div>
                <div>
                    <button>Sign up</button>
                </div>
            </form>
        </section>
    );
}
export default LoginSignup;
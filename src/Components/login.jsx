import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [indexDisplay, setIndexDisplay] = useState(true)
    const [signupDisplay, setSignupDisplay] = useState(false)

    const handleIndexDisplay= () => {
        setIndexDisplay(!indexDisplay)
    }

    const handleSingupDisplay= () => {
        setSignupDisplay(!signupDisplay)
        setIndexDisplay(!indexDisplay)
    }

    return(
        <div>
            <header>
                <h1>ParkBuddy</h1>
            </header>
            {
                signupDisplay?(
                    <div>
                        <form>
                            <input type="text" placeholder="Introduce nombre de usuario" />
                            <br></br>
                            <input type="text" placeholder="Introduce un password" />
                            <br></br>
                            <input type="text" placeholder="Introduce tu email" />
                            <br></br>
                            <input type="submit" value="Register" />
                        </form>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {
                indexDisplay?(
                 <div>
                               <form action="#">
                                     <div>
                                         <input
                                             type="text"
                                             placeholder="Username"
                                             value={username}
                                             onChange={(e)=> setUsername(e.target.value)}
                                             required
                                             ></input>
                                         <br></br>
                                         <input
                                             type="text"
                                             placeholder="password"
                                             value={password}
                                             onChange={(e)=>setPassword(e.target.value)}
                                             required
                                             ></input>
                                     </div>
                                     <div>
                                         <button type="submit">Login</button>
                                         <button type="button" onClick={handleSingupDisplay}>Sign up</button>
                                     </div>
                                     <div>
                                         <a href="#">Have you forgotten your password?</a>
                                     </div>
                                 </form>
                             </div>
                )  : (
                    <div></div>
                )
            }
        </div>
    )
}



export default LoginPage;
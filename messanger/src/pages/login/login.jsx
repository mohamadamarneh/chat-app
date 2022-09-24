
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../authContect';


const Login = () => {

    // import { AuthContext } from './authContext';

    // function Header() {
    //     const authContext = useContext(AuthContext);
    //     console.log("head", authContext)

    //     function logOut() {
    //         authContext.setAuth({})
    //         localStorage.removeItem('Email');
    //     }


    // const users =
    // {
    //     name: "mohamad@gmail.com",
    //     password: "1"
    // }

    const [email, setCon] = useState('');
    const [msg, setmsg] = useState('');
    let [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);



    let loggin = (e) => {

        e.preventDefault();
        console.log('log in try ');
        const login = `http://127.0.0.1:8000/api/logins`;
        console.log(email, password);
        fetch(login, {
            method: "POST",
            // body: JSON.stringify({
            //     username: email,
            //     password: password
            // }),
            body: {
                username: 'moha',
                password: '12345678'
               
            },
        }).then((res) => res.json())
            .then((json) => {

                console.log(json);


            }).catch(err => {
                console.log(err);
            }
            )

        // .then((response) => response)
        // .then((data) => {
        //     console.log(data);
        //     // code here //
        //     if (data.error) {
        //         alert("Error Password or Username"); /*displays error message*/
        //     } else {
        //         console.log('among');
        //         /*opens the target page while Id & password matches*/
        //     }
        // })
        // .catch((err) => {
        //     console.log(err);
        // });









        // if (email === users.name && password === users.password) {

        //     localStorage.setItem('Email', email);
        //     authContext.setAuth(email);
        //     authContext.setAuth({ email });

        // } else {
        //     {
        //         setmsg(<div class="alert alert-danger" role="alert">
        //             <strong>("user name or password is wrong!")</strong>
        //         </div>)
        //     }
        // }
    }



    return (
        <>
            <div className='container'>
                <form >
                    <div className="form-group m-2" >

                        <input required type="text" onChange={e => setCon(e.target.value)}
                            value={email} className="form-control m-2" name="" id="" aria-describedby="emailHelpId" placeholder="user name" />
                        <input required type="text" onChange={e => setPassword(e.target.value)}
                            value={password} className="form-control m-2" name="" id="" aria-describedby="emailHelpId" placeholder="password" />
                        <button onClick={loggin} className='btn btn-primary m-2'>log in</button>
                    </div>
                </form>
                <p>{msg}</p>

            </div>
        </>
    );
}

export default Login;
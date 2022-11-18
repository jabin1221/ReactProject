import { authService, firebaseInstance } from "fBase";
import React, {useState} from "react";
import Clock from "components/Clock";
import Main from "components/Main";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    } from "firebase/auth";


    const inputStyles = {};

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");
    const onChange = (event) =>{
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
        //event.preventDafault();
         try{
             let data;
             const auth = getAuth();
         if(newAccount){
             data = await createUserWithEmailAndPassword(auth, email, password);
             console.log("real")
             
         }else{
             data = await signInWithEmailAndPassword(auth, email, password);
             
         }
        
         console.log(data);
     }catch(error){
         setError(error.message);
     }
     };
    const toggleAccount = () => setNewAccount(prev => !prev);
    return (
        <>
        <form onSubmit={onSubmit} className="container">
        <input name = "email"
        type = "text"
        placeholder="Email"
        required
        value = {email}
        onChange={onChange}
        className="authInput"/>
        <input name = "password"
        type = "password"
        placeholder="Password"
        required
        value = {password}
        onChange={onChange}
        className="authInput"/>
        <input type = "submit"
        className="authInput authSubmit" value={newAccount ? "Create Account" : "Log In"} />
        {error && <span className="authError">{error}</span>}
    </form>
    <span onClick={toggleAccount}  className="authSwitch">{newAccount ? "Log in." : "Create Account" }</span>
    </>
    )
}

export default AuthForm;
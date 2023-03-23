import React,{ useState } from "react";
import { useAuth } from "../context/authContext";


export const Singup = () => {
    const { signUp } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(element){
        element.preventDefault()
        
    }

    return (
        <div className="container">
            <h2>Singup</h2>
            <form onClick={handleSubmit} >
                <label>Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(element) => {setEmail(element.target.value)}}
                />

                <label>Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(element) => {setPassword(element.target.value)}}
                />

                <label>Password Confirm</label>
                <input 
                    type="password"
                    value={confirmPassword}
                    onChange={(element) => {setConfirmPassword(element.target.target)}}
                />

                <button className="button-block" type="submit">Singup</button>
            </form>
        </div>
    )
}
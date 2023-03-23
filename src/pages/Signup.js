import React,{ useState } from "react";


export const Singup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <div className="container">
            <h2>Singup</h2>
            <form>
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
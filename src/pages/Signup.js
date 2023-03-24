import React,{ useState } from "react";
import { useAuth } from "../context/authContext";


export const Singup = () => {
    const { signUp } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    console.log(password)
    console.log(confirmPassword)
    async function handleSubmit(element){
        element.preventDefault()
        
        
        if(password.length <6){
            alert("O password deve ter 6 caracteres no minimo")
            return
        }

        if(password !== confirmPassword){
            alert("As senhas não conferem")
            return
        }

        try{
            await signUp(email, password)
        }catch(error) {
            alert("occoreu um erro ao tentar criar um usuario")
        }

        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className="container">
            <h2>Singup</h2>
            <form onSubmit={handleSubmit} >
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
                    onChange={(element) => {setConfirmPassword(element.target.value)}}
                />

                <button className="button-block" type="submit">Singup</button>
            </form>
        </div>
    )
}
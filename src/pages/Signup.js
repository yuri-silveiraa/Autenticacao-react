import React,{ useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom"


export const Singup = () => {
    const navigate = useNavigate()
    const { signUp } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    console.log(password)
    console.log(confirmPassword)
    async function handleSubmit(element){
        element.preventDefault()
        
        setLoading(true)

        if(password.length <6){
            alert("O password deve ter 6 caracteres no minimo")
            setLoading(false)
            return
        }

        if(password !== confirmPassword){
            alert("As senhas não conferem")
            setLoading(false)
            return
        }

        try{
            await signUp(email, password)
            alert("Sua conta foi criada com sucesso")
            navigate("/login")
        }catch(error) {
            alert("occoreu um erro ao tentar criar um usuario")
        }

        setLoading(false)
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className="container">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit} >
                <label>Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(element) => {setEmail(element.target.value)}}
                />

                <label>Senha</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(element) => {setPassword(element.target.value)}}
                />

                <label>Confirmar senha</label>
                <input 
                    type="password"
                    value={confirmPassword}
                    onChange={(element) => {setConfirmPassword(element.target.value)}}
                />

                <button disabled={loading} className="button-block" type="submit">Cadastrar</button>
            </form>

            <div className="center">
                <div>
                    <p>
                        Ja tem uma conta? <Link to="/login">Entrar </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
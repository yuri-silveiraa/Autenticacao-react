import React,{ useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/authContext"

export const ForgotPassword = () => {
    const navigate = useNavigate()
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(element){
        element.preventDefault()

        setLoading(true)

        try {
            await resetPassword(email)
            alert("Foi enviado um email para resetar sua senha")
            navigate("/login")
        } catch (error) {
            console.log(error)
            alert("Ocorreu um erro ao tentar recuperar a senha")
        } finally {
            setLoading(false)
        }

    }
    return (
        <div className="container">
            <h1>Esqueci minha senha</h1>

            <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
                type="email"
                value={email}
                onChange={(element) => {setEmail(element.target.value)}}
            />
            <button disabled={loading} className="button-block" type="submit">Recuperar</button>
            </form>

            <div className="center">
                <div>
                <p>
                    Ja tem uma conta?<Link to="/login"> Entrar </Link>
                </p>
                <p>
                    Não tem uma conta? <Link to="/signup"> Cadastre-se </Link>
                </p>
                </div>
            </div>
        </div>
    )
}
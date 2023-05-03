import React,{ useState } from "react"

export const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(element){
        element.preventDefault()

        setLoading(true)

        try {
            
        } catch (error) {
            
        } finally {
            
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
                onChange={(element) => {}}
            />
            <button disabled={loading} className="button-block" type="submit">Recuperar</button>
            </form>
        </div>
    )
}
import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

export const UserProfile = () => {
    const { logOut, currentUser } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        try {
            await logOut()
            navigate("/login")
        } catch (error) {
            alert("Ocorreu um error ao tentar realizar o logout")
        }
    }

    return (
        <div className="container">
            <h1>Perfil de Usuário</h1>

            <button onClick={handleLogout}>Sair</button>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="">
                        <td>{currentUser.email}</td>
                        <td>Atualizar perfil do usuário</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
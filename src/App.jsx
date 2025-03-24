import { useEffect, useState } from 'react';

function App(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/taskmanager/user/all')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));

    }, []);
    return (
        <div style={{padding: "20px"}}>
            <h1>Lista de Usuarios</h1>
            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Fecha de Registro</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.idUser}>
                        <td>{user.idUser}</td>
                        <td>{user.nameUser}</td>
                        <td>{user.emailUser}</td>
                        <td>{user.recordDateUser}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default App

import { useEffect, useState } from "react";
import axios from "axios";
import { UserInfo } from "./UserInfo";

export function Users() {
    const [users, setUser] = useState([])

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((reponse) => {
            const utilisateurs = reponse.data;
            setUser(utilisateurs)
            console.log(users)
        })
    }, [])

    return (
        <>
        {users.map(function(user){
            return(<UserInfo name={user.name} site={user.website} email={user.email}/>)
        })}
        </>
    )

}
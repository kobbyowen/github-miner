import React from "react"
import User from "./User"
import {useGithubDataFetcher} from "./hooks"

const UsersList = ( { count, url}) => {

    const [ users, ] = useGithubDataFetcher(url)
    const loading = Object.keys(users).length === 0 
    const data = loading ? [...Array(count)].map( _ => {}) : users.data
    
    return <div className="users">
        {
            data.map( (user, index) => {
                return <User {...user} key={index} />
            })
        }
    </div>
}

export default UsersList

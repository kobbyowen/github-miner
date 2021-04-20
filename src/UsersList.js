import React from "react"
import User from "./User"
import {useGithubDataFetcher} from "./hooks"

const UsersList = ( { count, url}) => {

    const {data, loading} = useGithubDataFetcher(url)
    const d = loading ? [...Array(count)].map( _ => ({})) : data

    return <div className="users">
        {
            d.map( (user, index) => {
                return <User {...user}  key={index} />
            })
        }
    </div>
}

export default UsersList
import React from "react"
import RepositoryList from "./RepositoryList"
import UsersList from "./UsersList"

const UserDetails =  ( { activeItem, url , count}) => {

    if ( activeItem === "Repositories") return <RepositoryList url={url} count={count} /> 
    if ( activeItem === "Starred" ) return <RepositoryList url={url} count={count} />
    if ( activeItem === "Followers" ) return <UsersList url={url} count={count} />
    if ( activeItem === "Following") return <UsersList url={url} count={count} />

}


export default UserDetails 
import React from "react"
import RepositoryList from "./RepositoryList"
import UsersList from "./UsersList"

const UserDetails =  ( { activeItem, url , count}) => {

    if ( activeItem === "repos") return <RepositoryList url={url} count={count} /> 
    if ( activeItem === "starred" ) return <RepositoryList url={url} count={count} />
    if ( activeItem === "followers" ) return <UsersList url={url} count={count} />
    if ( activeItem === "following") return <UsersList url={url} count={count} />

}


export default UserDetails 
import React, {createContext, useContext, useEffect, useState} from "react"


export const GitMinerContext = createContext()

export const getData = (uri, onSuccess, onError, onLoad) => {
    onLoad()
    fetch(uri)
        .then( response => response.json())
        .then(onSuccess)
        .catch(onError)
}

const GitMinerProvider = ({children}) => {

    const [username, setUserName ] = useState("king-d-dev")
    const [userData, setUserData] = useState({})
    const [followers, setFollowers] = useState({})
    const [following, setFollowing] = useState({})
    const [repos, setRepos] = useState({})
    const [starredRepos, setStarredRepos] = useState({})

    useEffect( () => {
        getData(`https://api.github.com/users/${username}`, setUserData, () => setUserData(undefined), ()=>setUserData({}))}
    ,[username])

    // useEffect( ()=> {
    //     getData(userData || userData.repos_url, setRepos, ()=> setRepos(undefined))}
    // , [userData])
    
    // useEffect (() => {
    //     getData(userData || userData.followers_uri, setFollowers, ()=> setFollowers(undefined))
    // }, [userData])

    // useEffect (() => {
    //     getData(userData || userData.following_uri, setFollowing, ()=> setFollowing(undefined))
    // }, [userData])
    
    // useEffect (() => {
    //     getData(userData || userData.following_uri, setStarredRepos, ()=> setStarredRepos(undefined))
    // }, [userData])
    

    return <GitMinerContext.Provider
            value={ {username, userData, followers, following, starredRepos, repos, setUserName } }>
        {children}
    </GitMinerContext.Provider>
}

export const useGithubMiner = () => useContext(GitMinerContext)

export default GitMinerProvider
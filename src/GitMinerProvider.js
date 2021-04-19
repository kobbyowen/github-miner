import React, {createContext, useContext, useEffect, useState} from "react"

export const GitMinerContext = createContext()

export const getData = (uri, onSuccess=f=>f, onError=f=>f, onLoad=f=>f) => {
    if (!uri) return onError("No url defined")

    onLoad()
    
    const base64 = btoa(uri)
    const data = window.sessionStorage.getItem(base64)
    if (data !== null ) return onSuccess(JSON.parse(data))

    fetch(uri)
        .then( response => response.json())
        .then(data => {
            window.sessionStorage.setItem(base64, JSON.stringify(data))
            onSuccess(data)
        })
        .catch(()  => { console.log("ERROR ") ; onError() } )
}

const GitMinerProvider = ({children}) => {

    const [username, setUserName ] = useState("trumpowen")
    const [userData, setUserData] = useState({})
    

    useEffect( () => {
        getData(`https://api.github.com/users/${username}`, setUserData, () => setUserData(undefined), ()=>setUserData({}))}
    ,[username])

    return <GitMinerContext.Provider
            value={ {username, userData, setUserName } }>
        {children}
    </GitMinerContext.Provider>
}

export const useGithubMiner = () => useContext(GitMinerContext)

export default GitMinerProvider
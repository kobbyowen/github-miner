import React, {createContext, useContext, useState} from "react"
import {useGithubDataFetcher} from "./hooks"

export const GitMinerContext = createContext()

const GitMinerProvider = ({children}) => {

    const [userName, setUserName] = useState("trumpowen")
    const {data, loading, error} = useGithubDataFetcher(`https://api.github.com/users/${userName}`)

    return <GitMinerContext.Provider value={ {userName, setUserName, data, loading, error } }>
        {children}
    </GitMinerContext.Provider>
}

export const useGithubMiner = () => useContext(GitMinerContext)

export default GitMinerProvider
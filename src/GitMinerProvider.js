import React, {createContext, useContext, useState} from "react"


export const GitMinerContext = createContext()

const GitMinerProvider = ({children}) => {

    const [username, setUserName ] = useState("")
    
    return <GitMinerContext.Provider
            values={ {username, setUserName } }>
        {children}
    </GitMinerContext.Provider>
}

export const useGithubMiner = () => useContext(GitMinerContext)

export default GitMinerProvider
import React, { useRef } from "react"
import {Input} from "semantic-ui-react"
import {useGithubMiner} from "./GitMinerProvider"

const GitSearchForm = () => {

    const inputRef = useRef() 
    const {loading, error, setUserName} = useGithubMiner() 

    const submitName = () => {
        const value = inputRef.current.inputRef.current.value 
        setUserName(value)
    }

    return <div id="git-searcher">
        <Input 
            loading={loading }
            error={error}
            fluid={true} 
            icon='user' 
            placeholder='Enter user name here....'
            onKeyPress={(e)=> e.key === "Enter" ? submitName() : undefined }
            ref={inputRef}
            defaultValue="trumpowen"
         />
    </div>

}

export default GitSearchForm
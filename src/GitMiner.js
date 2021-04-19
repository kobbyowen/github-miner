import React from "react"
import GitSearchForm from "./GitSearchForm"
import GithubUserProfile from "./GithubUserProfile"
import GithubUserDetails from "./GithubUserDetails"

const GitMiner = () => {

    
    return <div id="git-miner">

        <GitSearchForm />
        <GithubUserProfile />
        <GithubUserDetails />
    </div>
}

export default GitMiner 
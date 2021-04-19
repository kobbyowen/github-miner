import React from "react"
import { useGithubDataFetcher } from "./hooks"
import Repository from "./Repository"

const RepositoryList = ({count=4, url}) => {

    const [ repos, ] = useGithubDataFetcher(url)

    const loading = Object.keys(repos).length === 0 
    const data = loading ? [...Array(count)].map( _ => {}) : repos.data

    return <div className="repositories">
        
        {
            data.map( (repo, index) => {
                return <Repository {...repo} 
                        key={index} 
                        loading={loading} 
                        starsCount={repo && repo.stargazers_count}
                        forkCount ={repo && repo.forks_count}
                    />
            })
        }
    </div>
}

export default RepositoryList
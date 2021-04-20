import React from "react"
import ErrorComponent from "./ErrorComponent"
import { useGithubDataFetcher } from "./hooks"
import Repository from "./Repository"

const RepositoryList = ({count=4, url}) => {

    const {data, loading, error} = useGithubDataFetcher(url)

    const repos = loading ? [...Array(count)].map( _ => ({}) ) : data
    console.log(repos)
    
    if(error)
        return <ErrorComponent />

    return <div className="repositories">
        
        {
            repos.map( (repo, index) => {
                return <Repository {...repo} 
                        key={index} 
                        loading={loading} 
                        starsCount={repo.stargazers_count}
                        forkCount ={repo.forks_count}
                        updatedAt={repo.updated_at}
                    />
            })
        }
       
    </div>
}

export default RepositoryList
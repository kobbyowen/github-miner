import {useState, useEffect} from "react"
import {useGithubMiner} from "./GitMinerProvider"
import {getData} from "./GitMinerProvider"

export const useGithubDataFetcher =  url => {

    const {username} = useGithubMiner()
    const [ data, setData] = useState(Array(4))

    useEffect(()=> {
        getData(
            url,
            (data) => setData( {data}), 
            () => setData(undefined), 
            () => setData({})
        )
    }, [username, url])

    return [data, setData]
} 
    
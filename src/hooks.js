import {useEffect, useReducer} from "react"

export const getData = (uri, onSuccess=f=>f, onError=f=>f, onLoad=f=>f) => {
    
    if (!uri) return onError(new Error("No url defined"))

    onLoad()
    
    const base64 = btoa(uri)
    const data = window.sessionStorage.getItem(base64)
    if (data !== null ) return onSuccess(JSON.parse(data))

    fetch(uri)
        .then( response => {
                if (!response.ok) {
                    let err = new Error("HTTP status code: " + response.status)
                    err.response = response
                    err.status = response.status
                    throw err
            }
            return response.json()
        })
        .then(data => {
            window.sessionStorage.setItem(base64, JSON.stringify(data))
            return onSuccess(data)
        })
        .catch((err)  => { onError(err) } )
}

export const useGithubDataFetcher =  url => {

    const [ data, setData] = useReducer( 
        ( oldObject, newObject) => ({...oldObject, ...newObject}), 
        { data: {}, loading : true, error: false }
    )
    
    useEffect(()=> {
        getData( url, 
            (response) => setData({data: response, loading: false}) ,
            (response) => setData({data:response, error: true, loading: false}),
            () => setData({loading: true})
        )
    }, [url])

    return data 
} 
    
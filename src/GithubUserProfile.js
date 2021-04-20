import React from "react"
import {Segment, Grid, Image, Header, List, Placeholder} from "semantic-ui-react"
import ErrorComponent from "./ErrorComponent"
import { useGithubMiner } from "./GitMinerProvider"
import moment from "moment"

const GithubUserDetails = ({ bio, loading, name, login, email, location, company, url, lastSeen, twitter }) => {

    if (loading) return <Placeholder>
                    <Placeholder.Line /><Placeholder.Line /><Placeholder.Line />
                    <Placeholder.Line /><Placeholder.Line />
                </Placeholder>

    const data = [
        { icon: "mail" , content : <a href={`mailto:${email}`}>login</a>, data:email},
        { icon: "marker", content : location, data:location},
        { icon: "building" , content: company, data: company},
        { icon: "linkify" , content: <a href={url}>github.com</a>, data: url},
        { icon: "twitter", content: twitter, data: twitter},
        { icon: "eye" , content:  moment(lastSeen).format("MMM Do YY"), data:lastSeen }
    ]

    return <>
        <Header as="h1"> {name}
            <Header.Subheader>{login}</Header.Subheader>
        </Header>
        <p className="high-margin-down">{bio}</p>
        <List size="big" relaxed>
            { data.map( ( item , index) => ( item.data ?
                <List.Item key={index}>
                    <List.Icon name={item.icon} />
                    <List.Content>
                        {item.content}
                    </List.Content>
                </List.Item> : "" ))
            }
        </List>
    </>
} 

const  ProfileImage = ({loading, url}) => {
    
    if (loading) return <Placeholder><Placeholder.Image square /></Placeholder>
    return <Image wrapped src={url} />
}

const GithubUserProfile = () => {

    const { loading, error, data } = useGithubMiner() 
   
    if (error) return <ErrorComponent />

    return <div id="user-profile">
        <Segment>
            {
                <Grid>
                <Grid.Column style={{ padding:"0px"}} width={5}>
                    <ProfileImage loading={loading} url={data.avatar_url} />
                </Grid.Column>
                <Grid.Column width={11} style={{ paddingLeft:"30px"}}>
                   <GithubUserDetails 
                            {...data} loading={loading} 
                            twitter={data.twitter_username} 
                            lastSeen={data.updated_at} 
                    />  
                </Grid.Column>
            </Grid>  
            }
        </Segment>
    </div>
}

export default GithubUserProfile
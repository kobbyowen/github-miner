import React from "react"
import {Segment, Grid, Image, Header, List, Placeholder, Icon} from "semantic-ui-react"
import ErrorComponent from "./ErrorComponent"
import { useGithubMiner } from "./GitMinerProvider"

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
        { icon: "eye" , content: lastSeen, data: lastSeen}
    ]

    return <>
        <Header as="h1"> {name}
            <Header.Subheader>{login}</Header.Subheader>
        </Header>
        <p className="high-margin-down">{bio}</p>
        <List>
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

    const { userData } = useGithubMiner() 
    const loading = userData && Object.keys(userData).length === 0 

    return <div id="user-profile">
        <Segment>
            {
                userData ? <Grid>
                <Grid.Column style={{ padding:"0px"}} width={5}>
                    <ProfileImage loading={loading} url={userData.avatar_url} />
                </Grid.Column>
                <Grid.Column width={11} style={{ paddingLeft:"30px"}}>
                   <GithubUserDetails {...userData} loading={loading} 
                            twitter={userData.twitter_username} 
                            lastSeen={userData.updated_at} 
                    />  
                </Grid.Column>
            </Grid> : <ErrorComponent />
            }
        </Segment>
    </div>
}

export default GithubUserProfile
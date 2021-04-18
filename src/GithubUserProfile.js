import React from "react"
import {Segment, Grid, Image, Header, List} from "semantic-ui-react"
import { useGithubMiner } from "./GitMinerProvider"

const GithubUserDetails = ({ bio, name, login, email, location, company, url, lastSeen, twitter }) => {

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
const GithubUserProfile = () => {

    const { userData } = useGithubMiner() 

    return <div id="user-profile">
        <Segment>
            <Grid>
                <Grid.Column style={{ padding:"0px"}} width={5}>
                    <Image wrapped src={userData && userData.avatar_url} />
                </Grid.Column>
                <Grid.Column width={11} style={{ paddingLeft:"30px"}}>
                   <GithubUserDetails 
                            {...userData} 
                            twitter={userData.twitter_username} 
                            lastSeen={userData.updated_at} 
                    />
                </Grid.Column>
            </Grid>
        </Segment>
    </div>
}

export default GithubUserProfile
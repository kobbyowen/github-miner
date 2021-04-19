import React from "react"
import { Segment , Header, Image, Placeholder, Icon} from "semantic-ui-react"
import {useGithubDataFetcher} from "./hooks"

const UserPlaceHolder = () => {

    return  <Placeholder>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
            </Placeholder>
}

const User = ({ login}) => {

    const [ user, ] = useGithubDataFetcher(`https://api.github.com/users/${login}`)
    const { bio, avatar_url, name, location, commpany} = (user && user.data) || {} 

    const loading = Object.keys(user).length === 0 
    
    return <Segment raised className="user">
            { loading ?  <UserPlaceHolder /> :
                <>
                <Header as='h3'>
                    <Image circular src={avatar_url} />
                    <Header.Content>
                        {name} . <span>{login}</span>
                        <Header.Subheader>{bio}</Header.Subheader>
                    </Header.Content>
                </Header>
                <p>
                    {location ? <><Icon name="marker"/> {location} </>: ""}
                    {commpany ? <><Icon name="building"/> {commpany} </> : ""}
                </p></>
            }
    </Segment>
}

export default User 

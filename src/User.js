import React from "react"
import { Segment , Header, Image, Placeholder, Icon} from "semantic-ui-react"
import {useGithubDataFetcher} from "./hooks"
import {Description} from "./Repository"

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
    const { bio, avatar_url, name, location, company} = (user && user.data) || {} 

    const loading = Object.keys(user).length === 0 
    
    return <Segment raised className="user">
            { loading ?  <UserPlaceHolder /> :
                <>
                <Header as='h4'>
                    <Image circular src={avatar_url} />
                    <Header.Content>
                        {name}
                        <Header.Subheader><Description description={bio} /></Header.Subheader>
                    </Header.Content>
                </Header>
                <p>
                    {location ? <><Icon name="marker"/> {location} </>: ""}
                    {company ? <><Icon name="building"/> {company} </> : ""}
                </p></>
            }
    </Segment>
}

export default User 

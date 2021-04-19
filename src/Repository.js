import React  from "react"
import {Segment, Header, List, Placeholder, Icon} from "semantic-ui-react"

const Repository = ({ name, description, license, htmlUrl, starsCount, forkCount, updatedAt, loading }) => {

    const data = [
        
        {data: starsCount, icon: "star", content: starsCount},
        {data:forkCount, icon: "fork", content: forkCount},
        { data: "readme" , icon: "book", content: <a href="/">View README</a>}
    ]

    return <Segment raised>
        { loading? <Placeholder>
                    <Placeholder.Line length='very long' />
                    <Placeholder.Line length='full' />
                    <Placeholder.Line length='full' />
                </Placeholder>
            :
                <Header as="h4"> <a href={htmlUrl}>{name}</a> 
                    <Header.Subheader>{description}</Header.Subheader>
                </Header> 
        }
        <List horizontal size="mini">
            {
                data.map(
                    ( {icon, content}, index) => loading ? (
                    <List.Item key={index}>
                        <Placeholder.Line length='very short'  />
                    </List.Item> ): 
                    ( <List.Item key={index}>
                        <List.Content><Icon name={icon}/>{content}</List.Content>
                    </List.Item> )
                )
            }
        </List>
    </Segment>
}

export default Repository
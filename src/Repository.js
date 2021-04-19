import moment from "moment"
import React  from "react"
import {Segment, Header, List, Placeholder, Icon} from "semantic-ui-react"

export const Description = ({ description }) => {
    if (!description) return <></>
    if(description.length > 120) return  <span title={description}>{description.substr(0, 95)} ... </span>
    if ( description.length < 20) return  <span>{description} <br /></span>
    return <span>{description}</span>
}

const Repository = ({ name, description, license, htmlUrl, starsCount, forkCount, updatedAt, loading }) => {

    const data = [
        {data: license , icon: "balance scale", content: license && license.name},
        {data: starsCount, icon: "star", content: starsCount},
        {data:forkCount, icon: "fork", content: forkCount},
        { data: "readme" , icon: "book", content: <a href="/">View README</a>},
        { data: updatedAt, icon: "eye" , content: updatedAt && moment(updatedAt).fromNow() },
    ]

    return <Segment raised className="repo">
        { loading? <Placeholder>
                    <Placeholder.Line length='very long' />
                    <Placeholder.Line length='full' />
                    <Placeholder.Line length='full' />
                </Placeholder>
            :
                <Header as="h4"> <a href={htmlUrl}>{name}</a> 
                    <Header.Subheader><Description description={description} /></Header.Subheader>
                </Header> 
        }
        <List horizontal size="mini">
            {
                data.map(
                    ( {data, icon, content}, index) => loading ? (
                    <List.Item key={index}>
                        <Placeholder.Line length='very short'  />
                    </List.Item> ): 
                    ( content === null ? "" : <List.Item key={index}>
                        <List.Content><Icon name={icon}/>{content}</List.Content>
                    </List.Item> )
                )
            }
        </List>
    </Segment>
}

export default Repository
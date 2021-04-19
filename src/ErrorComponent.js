import React from "react"
import {Segment, Header, Icon} from "semantic-ui-react"

const ErrorComponent = ({ message="An error occured while making request"}) => {

    return <Segment raised className="error-page">
            <Header icon>
                <Icon name='pdf file outline' />
                {message}
            </Header> 
        </Segment>
}

export default ErrorComponent
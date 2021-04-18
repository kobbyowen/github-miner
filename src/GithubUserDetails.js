import React, {useState} from "react"
import {Menu, Segment} from "semantic-ui-react"

const GithubUserDetails = () => {

    const [ activeItem, setActiveItem ] = useState("Repositories")
    const handleItemClick = (e, { name }) => setActiveItem(name)

    return <div id="user-details">
        <Menu  pointing secondary widths={4}>
          <Menu.Item
            name='Repositories'
            active={activeItem === 'Repositories'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Starred'
            active={activeItem === 'Starred'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Following'
            active={activeItem === 'Following'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Followers'
            active={activeItem === 'Followers'}
            onClick={handleItemClick}
          />
        </Menu>

        <Segment>
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
    </div>
}

export default GithubUserDetails
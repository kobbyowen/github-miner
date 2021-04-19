import React, {useState} from "react"
import {Menu} from "semantic-ui-react"
import ErrorComponent from "./ErrorComponent"
import { useGithubMiner } from "./GitMinerProvider"
import UserDetails from "./UserDetails"

const GithubUserDetails = () => {

    const [ activeItem, setActiveItem ] = useState("Repositories")
    const {username,userData} = useGithubMiner()
    const handleItemClick = (e, { name }) => setActiveItem(name)
    let url = "" 
    let count = ""
    
    if (!userData){
      return <ErrorComponent />
    }

    if ( activeItem === "Repositories") { 
      count = userData && userData.public_repos
      url = userData &&  `https://api.github.com/users/${username}/repos`
    }
    if ( activeItem === "Starred") { 
      count = userData && 3
      url = userData && `https://api.github.com/users/${username}/starred`
    }
    if ( activeItem === "Following") { 
      count = userData && userData.following
      url = userData && `https://api.github.com/users/${username}/following`
    }
    if ( activeItem === "Followers") { 
      count = userData && userData.followers
      url = `https://api.github.com/users/${username}/followers`
    }

    return <div id="user-details">
        <Menu  pointing secondary widths={4}>
          <Menu.Item name='Repositories' active={activeItem === 'Repositories'} onClick={handleItemClick} />
          <Menu.Item name='Starred' active={activeItem === 'Starred'} onClick={handleItemClick} />
          <Menu.Item name='Following' active={activeItem === 'Following'} onClick={handleItemClick} />
          <Menu.Item name='Followers' active={activeItem === 'Followers'} onClick={handleItemClick} />
        </Menu>
        <UserDetails activeItem={activeItem} count={count} url={url} />
    </div>
}

export default GithubUserDetails
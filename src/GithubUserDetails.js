import React, {useState} from "react"
import {Menu, Label} from "semantic-ui-react"
import ErrorComponent from "./ErrorComponent"
import { useGithubMiner } from "./GitMinerProvider"
import UserDetails from "./UserDetails"

const GithubUserDetails = () => {

    const [ activeItem, setActiveItem ] = useState("Repositories")
    const {username,userData} = useGithubMiner()
    const handleItemClick = (e, { name }) => setActiveItem(name)
    
    console.log(userData)
    
    if (!userData){
      return <ErrorComponent />
    }

    let url = "" 
    let count = 0
    let reposCount =  userData && userData.public_repos
    let starredCount = userData && 3
    let followCount = userData && userData.following
    let followersCount = userData && userData.followers

    if ( activeItem === "Repositories") { 
      count = reposCount
      url =  `https://api.github.com/users/${username}/repos`
    }
    if ( activeItem === "Starred") { 
      count = starredCount
      url = `https://api.github.com/users/${username}/starred`
    }
    if ( activeItem === "Following") { 
      count = followCount
      url = `https://api.github.com/users/${username}/following`
    }
    if ( activeItem === "Followers") { 
      count = followersCount
      url = `https://api.github.com/users/${username}/followers`
    }
    
    const labelPros = {color: "grey", circular: true, size: "mini" , basic:true }
    return <div id="user-details">
        <Menu  pointing secondary widths={4}>
          <Menu.Item name='Repositories' active={activeItem === 'Repositories'}  onClick={handleItemClick}>
              Repositories <Label {...labelPros} >{reposCount}</Label>
          </Menu.Item>
          <Menu.Item name='Starred' active={activeItem === 'Starred'} onClick={handleItemClick} >
            Starred <Label {...labelPros} >{starredCount}</Label>
          </Menu.Item>
          <Menu.Item name='Following' active={activeItem === 'Following'} onClick={handleItemClick}>
              Following<Label {...labelPros} >{followCount}</Label>
          </Menu.Item>
          <Menu.Item name='Followers' active={activeItem === 'Followers'} onClick={handleItemClick} >
              Followers<Label {...labelPros} >{followersCount}</Label>
          </Menu.Item>
        </Menu>
        <UserDetails activeItem={activeItem} count={count} url={url} />
    </div>
}

export default GithubUserDetails
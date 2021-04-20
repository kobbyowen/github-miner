import React, {useState} from "react"
import {Menu, Label} from "semantic-ui-react"
import ErrorComponent from "./ErrorComponent"
import { useGithubMiner } from "./GitMinerProvider"
import UserDetails from "./UserDetails"

const GithubUserDetails = () => {

    const [ activeItem, setActiveItem ] = useState("repos")
    const {userName,data, loading, error} = useGithubMiner()
    const handleItemClick = (_, { name }) => setActiveItem(name)
    
    if (error) return <ErrorComponent />
    
    const displayData = {
      repos : { count : data.public_repos, url: `https://api.github.com/users/${userName}/repos`},
      starred: { count : data && 3, url : `https://api.github.com/users/${userName}/starred`}, 
      following: { count: data.following, url: `https://api.github.com/users/${userName}/following`}, 
      followers: {count : data.followers, url : `https://api.github.com/users/${userName}/followers`}
    }

    const labelPros = {color: "grey", circular: true, size: "mini" , basic:true }

    return <div id="user-details">
        <Menu  pointing secondary widths={4}>
          <Menu.Item name='repos' active={activeItem === 'repos'}  onClick={handleItemClick}>
              Repositories <Label {...labelPros} >{displayData.repos.count}</Label>
          </Menu.Item>
          <Menu.Item name='starred' active={activeItem === 'starred'} onClick={handleItemClick} >
            Starred <Label {...labelPros} >{displayData.starred.count}</Label>
          </Menu.Item>
          <Menu.Item name='following' active={activeItem === 'following'} onClick={handleItemClick}>
              Following<Label {...labelPros} >{displayData.following.count}</Label>
          </Menu.Item>
          <Menu.Item name='followers' active={activeItem === 'followers'} onClick={handleItemClick} >
              Followers<Label {...labelPros} >{displayData.followers.count}</Label>
          </Menu.Item>
        </Menu>
        <UserDetails activeItem={activeItem} loading={loading} {...displayData[activeItem]}  />
    </div>
}

export default GithubUserDetails
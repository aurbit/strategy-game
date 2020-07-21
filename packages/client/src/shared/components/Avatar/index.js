import React from 'react'
import { Dropdown } from 'react-bootstrap'
import AvatarImg from './avatar.webp'
import styles from './index.module.css'

const Avatar = () => {
  return (
    <div>
      <Dropdown drop="left">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Custom toggle
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Avatar

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <img
    alt="avatar"
    className={styles.avatarWrapper}
    src={AvatarImg}
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
  />
))

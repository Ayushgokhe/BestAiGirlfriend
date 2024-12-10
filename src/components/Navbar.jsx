import { AppBar, Toolbar, Box } from '@mui/material'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid #333;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  span {
    color: #9d5eff;
  }
`

const NavLinks = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #9d5eff;
  }
`

const SocialLinks = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-left: 2rem;
  a {
    color: white;
    transition: color 0.2s;
    &:hover {
      color: #9d5eff;
    }
  }
`

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo>
          aff<span>events</span>.
        </Logo>
        <NavLinks>
          <NavLink href="#submit">ADD THE EVENT</NavLink>
          <NavLink href="#newsletter">GET ON THE LIST</NavLink>
          <SocialLinks>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </SocialLinks>
        </NavLinks>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Navbar

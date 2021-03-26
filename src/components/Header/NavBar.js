import { navBarLinks } from '../../data/navBarLinks'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <nav>
            <ul>
                {navBarLinks.map(item =>
                    <NavLink key={item.id}><a href="#">{item.title}</a></NavLink>)}
            </ul>
        </nav>
    )
}

export default NavBar

const NavLink = styled.li`
    padding: 0 .7rem;
    font-size: .8rem;    
`


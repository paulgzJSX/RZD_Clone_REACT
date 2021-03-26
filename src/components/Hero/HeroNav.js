import { navMenuLinks } from '../../data/navMenuLinks'
import styled from 'styled-components'
import SelectionIcon from '../Icons/SelectionIcon'

const HeroNav = () => {
    return (
        <HeroNavBar>
            {navMenuLinks.map(item =>
                <li>
                    <a href="#">{item.title}</a>
                    {item.selection && <SelectionIcon />}
                </li>)}
        </HeroNavBar>
    )
}

export default HeroNav

const HeroNavBar = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 4rem; 
    
    li {
        display: flex;
        align-items: center;
        padding: 0 .7rem;

        a {
            font-size: 1rem;
            color: #fff;
        }
    }
`

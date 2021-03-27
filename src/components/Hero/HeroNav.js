import { useState, useRef } from 'react'
import { navMenuLinks } from '../../data/navMenuLinks'
import styled from 'styled-components'
import SelectionIcon from '../Icons/SelectionIcon'
import Dropdown from './Dropdown'
import { useClickOutside } from '../../hooks/useClickOutside'

const HeroNav = () => {
    const [displayDropdown, setDisplayDropdown] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const itemRef = useRef(null)

    useClickOutside(itemRef, setDisplayDropdown, setSelectedItem)

    const handleClick = id => {
        setDisplayDropdown(!displayDropdown)
        setSelectedItem(id)
    }

    return (
        <HeroNavBar>
            {navMenuLinks.map(item =>
                <li key={item.id}>
                    <a href="#">{item.title}</a>
                    {item.hasDropdown &&
                        <SelectionIcon
                            color='#fff'
                            handleClick={() => handleClick(item.id)}
                            selectedItem={selectedItem}
                            itemId={item.id}
                            displayDropdown={displayDropdown}
                        />}
                    {item.hasDropdown && displayDropdown && selectedItem === item.id &&
                        <Dropdown
                            dropdownItems={item.dropdownItems}
                            ref={itemRef}
                            isLastDropdown={item.id === navMenuLinks.length - 1}
                        />}
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
        position: relative;

        a {
            font-size: 1rem;
            color: #fff;
        }
    }
`

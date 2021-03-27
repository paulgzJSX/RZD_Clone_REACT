import React, { useState } from 'react'
import MenuRow from './MenuRow'
import styled from 'styled-components'

const Dropdown = React.forwardRef(({ dropdownItems, isLastDropdown }, ref) => {
    const [displayMiddleLevel, setDisplayMiddleLevel] = useState(false)
    const [selectedMiddleLevel, setSelectedMiddleLevel] = useState(null)

    const [displayLowLevel, setDisplayLowLevel] = useState(false)
    const [selectedLowLevel, setSelectedLowLevel] = useState(null)

    const displayMiddleLevelMenu = id => {
        setDisplayMiddleLevel(!displayMiddleLevel)
        setSelectedMiddleLevel(id)
    }

    const displayLowLevelMenu = id => {
        setDisplayLowLevel(!displayLowLevel)
        setSelectedLowLevel(id)
    }

    return (
        <DropdownMenu ref={ref} isLastDropdown={isLastDropdown}>
            <ul>
                {dropdownItems?.map(dropdownItem =>
                    <li key={dropdownItem?.id}>
                        <MenuRow
                            handleClick={() => displayMiddleLevelMenu(dropdownItem.id)}
                            displayDropdown={displayMiddleLevel}
                            dropdownItem={dropdownItem}
                            menuType='upperLevel'
                        />
                        {displayMiddleLevel && selectedMiddleLevel === dropdownItem.id &&
                            <ul>
                                {dropdownItem.dropdownItems.map(dropdownItem =>
                                    <li key={dropdownItem.id}>
                                        <MenuRow
                                            handleClick={() => displayLowLevelMenu(dropdownItem.id)}
                                            displayDropdown={displayLowLevel}
                                            dropdownItem={dropdownItem}
                                            menuType='middleLevel'
                                        />
                                        {displayLowLevel && selectedLowLevel === dropdownItem.id &&
                                            <ul>
                                                {dropdownItem.dropdownItems.map(dropdownItem =>
                                                    <li key={dropdownItem.id}>
                                                        <MenuRow
                                                            dropdownItem={dropdownItem}
                                                            menuType='lowLevel'
                                                        />
                                                    </li>)}
                                            </ul>}
                                    </li>)}
                            </ul>}
                    </li>)}
            </ul>
        </DropdownMenu>
    )
})

export default Dropdown

const DropdownMenu = styled.div`
    position: absolute;
    z-index: 10;
    left: ${props => props.isLastDropdown ? '-5rem' : '.7rem'};
    top: 2rem;
    background-color: #fff;
    height: auto;
    min-width: 500px;
    border-radius: .2rem;
    box-shadow: 0 4px 20px rgb(31 31 36 / 12%);

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        li {
            width: 100%;
            padding: 0 !important;
            cursor: pointer;
            transition: .2s ease-in-out;
            display: flex;
            flex-direction: column;
        }
    }
`
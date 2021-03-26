import React from 'react'
import styled from 'styled-components'

const Dropdown = React.forwardRef(({ dropdownItems, isLastDropdown }, ref) => {
    return (
        <DropdownMenu ref={ref} isLastDropdown={isLastDropdown}>
            <ul>
                {dropdownItems?.map(dropdownItem =>
                    <li key={dropdownItem?.id}>
                        <MenuRow>
                            <p>{dropdownItem?.title}</p>
                        </MenuRow>
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        li {
            width: 100%;
            padding: 0 !important;
            cursor: pointer;
            transition: .2s ease-in-out;

            &:hover {
                background-color: #E9EAED;
                color: #E21A1A;
            }
        }
    }
`

const MenuRow = styled.div`
    width: 100%;
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 5rem 0 1.5rem;
    border-bottom: 1px solid #E9EAED;

    p {
        text-transform: uppercase;
        font-family: 'Russian Rail G Pro', sans-serif;
    }
`

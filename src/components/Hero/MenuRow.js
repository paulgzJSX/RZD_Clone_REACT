import SelectionIcon, { Circle, ArrowDownIcon, ArrowUpIcon } from '../Icons/SelectionIcon'
import styled, { css } from 'styled-components'

const MenuRow = ({ handleClick, displayDropdown, dropdownItem, menuType }) => {
    return (
        <MenuRowContainer menuType={menuType}>
            <p>{dropdownItem.title}</p>
            {dropdownItem.hasDropdown &&
                <SelectionIcon
                    color='#000'
                    size='big'
                    font='big'
                    handleClick={handleClick}
                    displayDropdown={displayDropdown}
                />}
        </MenuRowContainer>
    )
}

export default MenuRow

const MenuRowContainer = styled.div`
    width: 100%;
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem 0 1.5rem;
    border-bottom: 1px solid #E9EAED;
    font-family: 'Russian Rail G Pro', sans-serif;
    transition: .3s ease-in-out;

    ${props => props.menuType === 'middleLevel' && css`
        font-size: 1.1rem;
        padding: 0 1.5rem 0 3rem;
        font-family: inherit;
    `}

    ${props => props.menuType === 'lowLevel' && css`
        font-size: 1rem;
        padding: 0 6rem 0 4.5rem;
        font-family: inherit;
        line-height: 18px;
    `}

    p {
        text-transform: ${props => props.menuType === 'upperLevel' && 'uppercase'};
        max-width: 25rem;
    }

    &:hover {
        background-color: #E9EAED;
        color: #E21A1A;

        ${Circle} {
            border: 1px solid #d89999;
        }

        ${ArrowDownIcon} {
            color: #E21A1A !important;
        }

        ${ArrowUpIcon} {
            color: #E21A1A !important;
        }
    }
`

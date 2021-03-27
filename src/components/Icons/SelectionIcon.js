import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import styled from 'styled-components'

const SelectionIcon = ({ handleClick, selectedItem, itemId, displayDropdown, color, size, font }) => {
    return (
        <Circle onClick={handleClick} size={size} >
            {selectedItem === itemId && displayDropdown
                ? <ArrowUpIcon color={color} />
                : <ArrowDownIcon color={color} font={font} />}
        </Circle>
    )
}

export default SelectionIcon

export const Circle = styled.div`
    display: grid;
    place-items: center;
    margin-left: 1rem;
    height: ${props => props.size === 'big' ? '2rem' : '1.2rem'};
    width: ${props => props.size === 'big' ? '2rem' : '1.2rem'};
    border: 1px solid rgb(224, 221, 221);
    border-radius: 50%; 
    transition: .1s ease-in-out; 
`

export const ArrowDownIcon = styled(IoIosArrowDown)`
    font-size: ${props => props.font ? '1rem' : '.7rem'};
    font-weight: bold;
    color: ${props => props.color};
    cursor: pointer;
`

const ArrowUpIcon = styled(IoIosArrowUp)`
    font-size: .7rem;
    font-weight: bold;
    color: ${props => props.black ? '#000' : '#fff'};
    cursor: pointer;
`

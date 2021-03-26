import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'

const SelectionIcon = () => {
    return (
        <Circle>
            <ArrowDownIcon />
        </Circle>
    )
}

export default SelectionIcon

const Circle = styled.div`
    display: grid;
    place-items: center;
    margin-left: 1rem;
    height: 1.2rem;
    width: 1.2rem;
    border: 1px solid rgb(224, 221, 221);
    border-radius: 50%;    
`

const ArrowDownIcon = styled(IoIosArrowDown)`
    font-size: .7rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`

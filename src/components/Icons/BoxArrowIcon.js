import { BsBoxArrowInUpRight } from 'react-icons/bs'
import styled from 'styled-components'

const BoxArrowIcon = ({ isHighlighted }) => {
    return (
        <BoxArrowContainer highlighted={isHighlighted} />
    )
}

export default BoxArrowIcon

const BoxArrowContainer = styled(BsBoxArrowInUpRight)`
    position: absolute;
    left: ${props => props.highlighted ? '24rem' : '22rem'};
    top: -.3rem;
    font-weight: ${props => props.highlighted && 'bold'};
`

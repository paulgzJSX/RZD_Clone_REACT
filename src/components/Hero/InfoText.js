import BoxArrowIcon from '../Icons/BoxArrowIcon'
import styled from 'styled-components'

const InfoText = ({ text, isHighlighted }) => {
    return (
        <InfoTextContainer highlighted={isHighlighted}>
            <p>{text}</p>
            <BoxArrowIcon isHighlighted={isHighlighted} />
        </InfoTextContainer>
    )
}

export default InfoText

const InfoTextContainer = styled.div`
    position: relative;
    cursor: pointer;
    transition: .3s ease-in-out;
    color: ${props => props.highlighted ? '#E21A1A' : 'rgb(131, 127, 127)'};

    &:hover {
        color: #CA1110;
    }
        
    p {
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.5rem;
    }
`
import { heroTitleText } from '../../data/heroTitle'
import styled from 'styled-components'

export const Title = () => {
    return (
        <HeroTitle>
            <Text highlighted>{heroTitleText.highlighted}</Text>
            <Text>, {heroTitleText.normal}</Text>
        </HeroTitle>
    )
}

const HeroTitle = styled.div`
    margin-bottom: 5rem;    
`

const Text = styled.span`
    color: #fff;
    background-color: ${props => props.highlighted && '#E21A1A'};
    font-size: 1.8rem;
    text-transform: uppercase;
    padding-right: .8rem;
    font-family: Russian Rail G Pro;    
`
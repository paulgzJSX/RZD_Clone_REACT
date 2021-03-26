import { useState } from 'react'
import { More, TrainCard, BigIcon } from '../../styles/SharedStyles'
import styled from 'styled-components'

const BigCard = ({ card }) => {
    const [displayMore, setDisplayMore] = useState(false)

    return (
        <TrainCard
            image={card.image}
            highSpeed={card.id === 1}
            multiModal={card.id === 2}
            onMouseOver={() => setDisplayMore(true)}
            onMouseLeave={() => setDisplayMore(false)}
        >
            <Heading>
                <h4>{card.heading}</h4>
                <HeadingP upper={card.id === 2}>{card.text}</HeadingP>
            </Heading>
            {displayMore
                ? <MoreContainer>
                    <More>Подробнее</More>
                    <BigIcon />
                  </MoreContainer>
                : <BigIcon />}
        </TrainCard>
    )
}

export default BigCard

const MoreContainer = styled.div`
    display: flex;
    align-items: center;
`

const Heading = styled.div`
    h4 {
        font-family: Russian Rail G Pro;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 400;
        margin-bottom: .7rem;
    }
`

const HeadingP = styled.p`
        line-height: 1.5rem;
        text-transform: ${props => props.upper && 'uppercase'};    
`
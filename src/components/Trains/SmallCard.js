import { TrainCard, BigIcon } from '../../styles/SharedStyles'
import styled from 'styled-components'

const SmallCard = ({ card }) => {
    return (
        <TrainCard image={card.image}>
            <HeadingSmall>
                <h4>{card.heading}</h4>
                <p>{card.text}</p>
            </HeadingSmall>
            <BigIcon />
        </TrainCard>
    )
}

export default SmallCard

const HeadingSmall = styled.div`
    h4 {
        font-family: Russian Rail G Pro;
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`

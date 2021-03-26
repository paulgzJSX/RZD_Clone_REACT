import BigCard from './Trains/BigCard'
import NoTextCard from './Trains/NoTextCard'
import SmallCard from './Trains/SmallCard'
import styled from 'styled-components'
import { smallCards, bigCards } from '../data/trainCards'

const Trains = () => {
    return (
        <TrainsGrid>
            <BigCard card={bigCards[0]} />
            {smallCards.map(card =>
                <SmallCard key={card.id} card={card} />)}
            <NoTextCard />
            <BigCard card={bigCards[1]} />
        </TrainsGrid>
    )
}

export default Trains

const TrainsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1.5rem 7.6rem 4rem;
    grid-gap: 1rem;
    grid-row-gap: 1.8rem;
    margin-bottom: 5rem; 
`
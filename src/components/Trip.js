import TripCard from './Trip/TripCard'
import { cards } from '../data/tripCards'
import styled from 'styled-components'

const Trip = () => {
    return (
        <TripDetails>
            {cards.map(card =>
                <TripCard key={card.id} card={card} />)}
        </TripDetails>
    )
}

export default Trip

const TripDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem 7.6rem 4rem;
    grid-gap: 1rem;    
`

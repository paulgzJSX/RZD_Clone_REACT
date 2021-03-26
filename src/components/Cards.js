import BuyPremiumTicket from './Cards/BuyPremiumTicket'
import MyTickets from './Cards/MyTickets'
import PictureCard from './Cards/PictureCard'
import SupportService from './Cards/SupportService'
import styled from 'styled-components'
import { pictureCards } from '../data/pictureCards'

const Cards = () => {
    return (
        <CardsGrid>
            <MyTickets />
            <BuyPremiumTicket />
            {pictureCards.map(card =>
                <PictureCard key={card.id} card={card} />)}
            <SupportService />
        </CardsGrid>
    )
}

export default Cards

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem 7.6rem 3rem;
    grid-gap: 1rem;    
`

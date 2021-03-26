import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import styled from 'styled-components'
import { Title } from '../../styles/SharedStyles'

const TripCard = ({ card }) => {
    const [displayMore, setDisplayMore] = useState(false)

    return (
        <TripCardContainer onMouseOver={() => setDisplayMore(true)} onMouseLeave={() => setDisplayMore(false)}>
            <div>
                <Title marginBottom='.7rem' color='white'>{card.title}</Title>
                {card.additional}
                <p className='opace'>{card.text}</p>
            </div>
            <ArrowIconContainer>
                {displayMore ? <More>Подробнее</More> : <ArrowIcon />}
            </ArrowIconContainer>
        </TripCardContainer>
    )
}

export default TripCard

const TripCardContainer = styled.div`
    background-color: #767d89;
    height: 13rem;
    padding: 1.5rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    cursor: pointer;
    transition: .3s ease-in-out;   
    
    &:hover {
        background-color: #E21A1A;
        color: #fff;
    }
`

const ArrowIconContainer = styled.div`
    display: flex;
    align-items: center;
`

const More = styled.p`
    margin-right: .5rem;
    text-transform: uppercase;
    font-family: Russian Rail G Pro;
    font-size: .9rem;
    opacity: .8;
    line-height: 1.5rem;
    color: #fff;
`

const ArrowIcon = styled(BsArrowRight)`
    font-size: 1.5rem;
    opacity: .8;
    line-height: 1.5rem;
`

import HeroNav from './Hero/HeroNav'
import { Title } from './Hero/Title'
import TicketsSearchForm from './Hero/TicketsSearchForm'
import Info from './Hero/Info'
import styled from 'styled-components'
import Image from '../images/railroad.jpg'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroNav />
                <Title />
                <TicketsSearchForm />
                <Info />
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    height: 30rem;
    background: 
        linear-gradient(to right, #3434386c, #50505a77), 
        url(${Image}) no-repeat center/cover;
`

const HeroContent = styled.div`
    padding: 1.2rem 8rem 0;    
`

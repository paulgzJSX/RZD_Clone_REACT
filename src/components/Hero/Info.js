import styled from 'styled-components'
import InfoText from './InfoText'

const Info = () => {
    return (
        <HeroInfo>
            <InfoText text='Перейти на старую версию покупки билетов' />
            <InfoText text='Коронавирус. Информация для наших клиентов' isHighlighted='true' />
        </HeroInfo>
    )
}

export default Info

const HeroInfo = styled.div`
    width: 100%;
    background-color: #fff;
    height: 7.5rem;
    padding: 1.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
`

import CardTitle from './CardTitle'
import styled from 'styled-components'

const SupportService = () => {
    return (
        <Support>
            <CardTitle title='Служба поддержки' marginBottom='1.5rem' color='white' />
            <Contacts>8 800 775-00-00</Contacts>
            <p>Единый информационно-сервисный центр</p>
            <Contacts>ticket@rzd.ru</Contacts>
            <p>Для вопросов по электронным билетам</p>
        </Support>
    )
}

export default SupportService

const Support = styled.div`
    height: 17rem;
    padding: 1.5rem 2rem;
    background: linear-gradient(90deg, rgb(87, 86, 90), rgb(91, 90, 96));
    color: #fff;    
` 

const Contacts = styled.p`
    font-family: Russian Rail G Pro;
    font-size: 1.5rem;
    line-height: 40px;    
`

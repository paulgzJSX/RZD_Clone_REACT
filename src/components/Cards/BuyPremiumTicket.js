import CardTitle from './CardTitle'
import { CardShared, SmallP, SmallPBlack } from '../../styles/SharedStyles'
import styled from 'styled-components'

const BuyPremiumTicket = () => {
    return (
        <CardShared>
            <CardTitle title='Купить премиальный билет' />
            <SmallP>Информация о бонусных баллах недоступна для неавторизованных пользователей.</SmallP>
            <Button href="#">Регистрация на портале</Button>
            <SmallPBlack>Уже есть аккаунт на rzd.ru? <a href="#">Войти</a></SmallPBlack>
        </CardShared>
    )
}

export default BuyPremiumTicket

const Button = styled.a`
    display: block;
    border: 1px solid #000;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    transition: .3s ease-in-out;
    font-family: Russian Rail G Pro;   
    
    &:hover {
        background-color: #CA1110;
        color: #fff;    
    }
`

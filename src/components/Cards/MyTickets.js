import CardTitle from './CardTitle'
import { CardShared, SmallP } from '../../styles/SharedStyles'
import styled from 'styled-components'

const MyTickets = () => {
    return (
        <CardShared>
            <CardTitle title='Мои билеты' />
            <div>
                <Authorize>
                    <SmallP>Вам необходимо авторизоваться</SmallP>
                </Authorize>
                <AuthorizationControls>
                    <a href="#">Вход</a>
                    <a href="#">Регистрация</a>
                </AuthorizationControls>
            </div>
        </CardShared>
    )
}

export default MyTickets

const Authorize = styled.div`
    border-bottom: .5px solid rgba(0, 0, 0, .2);
    padding: .5rem 0;
    margin-bottom: 1rem;  
`

const AuthorizationControls = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: .9rem;
    font-family: Russian Rail G Pro;   
    
    a {
        color: #E21A1A;
    }
`

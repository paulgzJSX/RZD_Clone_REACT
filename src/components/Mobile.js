import styled from 'styled-components'
import MobileBackgroundImage from '../images/blurred.jpg'
import GirlImage from '../images/girl.png'

const Mobile = () => {
    return (
        <MobileContainer>
            <MobileApp>
                <MobileHeading>
                    <h1>Мобильное приложение для<br /> пассажиров</h1>
                    <p>Мобильный сервис по продаже билетов<br /> на поезда дальнего следования без<br /> наценок и переплат</p>
                </MobileHeading>
                <a href='#'>Подробнее</a>
                <MobileImage />
            </MobileApp>
        </MobileContainer>
    )
}

export default Mobile

const MobileContainer = styled.div`
    background: url(${MobileBackgroundImage}) no-repeat center/cover;
    height: 304px;
    margin-bottom: 2rem;  
    position: relative;
    z-index: 1;    
`

const MobileApp = styled.div`
    padding: 3rem 7.6rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;   
    
    a {
        padding: 1rem 2rem;
        background-color: red;
        width: 14rem;
        text-align: center;
        font-family: Russian Rail G Pro;
        text-transform: uppercase;
        font-size: .9rem;
        color: #fff;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #C31B1C;
        }
    }
`

const MobileHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;  
    
    h1 {
        font-family: Russian Rail G Pro;
        font-weight: 400;    
    }

    p {
        margin-right: 15rem;
    }
`

const MobileImage = styled.div`
    position: absolute;
    background: url(${GirlImage}) no-repeat;
    bottom: -2.1rem;
    right: 3rem;
    width: 20rem;
    height: 120%;
    z-index: 10;    
`

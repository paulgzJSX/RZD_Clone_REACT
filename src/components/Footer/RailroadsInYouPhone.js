import AppleIcon from '../Icons/AppleIcon'
import GooglePlayIcon from '../Icons/GooglePlayIcon'
import styled from 'styled-components'

const RailroadsInYouPhone = () => (
    <RailContainer>
        <h2>Железные дороги в вашем телефоне</h2>
        <MobileStore>
            <a href="#" className='app-store-button'><AppleIcon /> App Store</a>
            <a href="#"><GooglePlayIcon /> Google Play</a>
        </MobileStore>
    </RailContainer>
)

export default RailroadsInYouPhone

const RailContainer = styled.div`
    padding: 3rem 0;
    margin: 0 7.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    margin-bottom: 1rem;

    h2 {
        font-weight: 400;
        font-size: 1.7rem;
        color: #fff;    
    }
`

const MobileStore = styled.div`
    a {
        display: inline-block;
        padding: .9rem 1.5rem;
        background-color: #858b8f;
        width: 10rem;
        text-align: center;
        color: #fff;
        display: inline-flex;
        transition: .3s ease-in-out;   
        
        &:hover {
            background-color: #E21A1A;
        }

        &.app-store-button {
            margin-right: 1rem;
        }
    }
`
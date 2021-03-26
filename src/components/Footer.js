import BottomRow from './Footer/BottomRow'
import Contacts from './Footer/Contacts'
import Links from './Footer/Links'
import RailroadsInYouPhone from './Footer/RailroadsInYouPhone'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <Contacts />
            <RailroadsInYouPhone />
            <Links />
            <BottomRow />
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    background-color: #464A53;  
`

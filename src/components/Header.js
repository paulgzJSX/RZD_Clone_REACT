import Logo from './Header/Logo';
import NavBar from './Header/NavBar';
import Blind from './Header/Blind';
import PersonalAccount from './Header/PersonalAccount';
import Language from './Header/Language';
import Search from './Header/Search';
import styled from 'styled-components'

const Header = () => (
    <HeaderContainer>
        <Left>
            <Logo />
            <NavBar />
        </Left>
        <Right>
            <Blind />
            <PersonalAccount />
            <Language />
            <Search />
        </Right>
    </HeaderContainer>
)

export default Header

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    height: 100%;    
`

const Right = styled.div`
    display: flex;
    align-items: center;    
`

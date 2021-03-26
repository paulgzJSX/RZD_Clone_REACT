import GlassesIcon from '../Icons/GlassesIcon';
import { HeaderLink, LinkShared } from '../../styles/SharedStyles';
import styled from 'styled-components';

const Blind = () => {
    return (
        <HeaderLink>
            <Link href="#">Версия для слабовидящих</Link>
            <GlassesIcon />
        </HeaderLink>
    )
}

export default Blind

const Link = styled.a`
    ${LinkShared}
`

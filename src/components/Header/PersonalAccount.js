import ExitIcon from '../Icons/ExitIcon'
import { HeaderLink, LinkShared } from '../../styles/SharedStyles'
import styled from 'styled-components'

const PersonalAccount = () => {
    return (
        <HeaderLink>
            <Link href="#">Андрей Леонтьев</Link>
            <Link href="#">Выход</Link>
            <ExitIcon />
        </HeaderLink>
    )
}

export default PersonalAccount

const Link = styled.a`
    ${LinkShared}
`


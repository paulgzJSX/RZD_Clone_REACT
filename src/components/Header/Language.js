import ArrowDownIcon from '../Icons/ArrowDownIcon'
import { HeaderLink, LinkShared } from '../../styles/SharedStyles'
import styled from 'styled-components'

const Language = () => {
    return (
        <HeaderLink>
            <Link href="#">Rus</Link>
            <ArrowDownIcon />
        </HeaderLink>
    )
}

export default Language

const Link = styled.a`
    ${LinkShared}
`

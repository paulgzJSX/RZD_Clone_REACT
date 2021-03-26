import LinksCard from "./LinksCard"
import { columns } from '../../data/linkColumns'
import styled from 'styled-components'

const Links = () => {
    return (
        <LinksContainer>
            {columns.map(column =>
                <LinksCard column={column} />)}
        </LinksContainer>
    )
}

export default Links

const LinksContainer = styled.div`
    padding: 0 7.6rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 2rem;    
`

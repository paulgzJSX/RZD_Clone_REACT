import CardTitle from './CardTitle'
import { CardShared } from '../../styles/SharedStyles'
import styled from 'styled-components'

const PictureCard = ({ card }) => {
    return (
        <CardShared image={card.image} >
            <CardTitle title={card.title} color='white' />
            <List>
                {card.links.map((link, idx) =>
                    <li key={idx}><a href='#'>{link.text}</a></li>)}
            </List>
        </CardShared>
    )
}

export default PictureCard

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
        width: 100%;
        display: block;
        padding: .5rem 0;
        border-bottom: .5px solid rgb(190, 186, 186);

        &:last-of-type {
            border-bottom: none;
        }

        a {
            color: #fff;
            font-size: 1rem;
        }
    }
`

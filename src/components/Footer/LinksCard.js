import styled from 'styled-components'

const LinksCard = ({ column }) => {
    return (
        <Column>
            <p>{column.title}</p>
            <LinksList>
                {column.links.map(link =>
                    <li><a href={link.url}>{link.text}</a></li>)}
            </LinksList>
            {column.additional && column.additional}
        </Column>
    )
}

export default LinksCard

const Column = styled.div`
    p {
        font-family: Russian Rail G Pro;
        font-size: .9rem;
        color: #fff;
        text-transform: uppercase;
        padding: 1.2rem 0;
        transition: .3s ease-in-out;
        cursor: pointer;

        &:hover {
            color: #C31B1C;
        }
    }
`

export const LinksList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;  
    
    li {
        margin-bottom: .7rem;

        a {
            color: #6D7B89;
            font-size: .9rem;
            transition: .2s ease-in-out;

            &:hover {
                color: #C31B1C;
            }
        }
    }
`

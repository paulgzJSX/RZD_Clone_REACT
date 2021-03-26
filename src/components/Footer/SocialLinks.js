import { socialLinks } from '../../data/socialLinks'
import styled from 'styled-components'

const SocialLinks = () => {
    return (
        <SocialLinksContainer>
            <ul>
                {socialLinks.map(socialLink =>
                    <li key={socialLink.id}><a href={socialLink.link}>{socialLink.icon}</a></li>)}
            </ul>
        </SocialLinksContainer>
    )
}

export default SocialLinks

const SocialLinksContainer = styled.div`
    ul {
        li {
            margin: 0 .2rem;

            a {
                display: inline-block;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                font-size: 1.3rem;
                border: 1px solid grey;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                transition: .2s ease-in-out;

                &:hover {
                    color: #CA1110;
                    border: 1px solid #CA1110;
                }
            }
        }   
    }
`

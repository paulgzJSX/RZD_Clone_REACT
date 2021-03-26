import { contacts } from '../../data/contacts'
import styled from 'styled-components'

const Contacts = () => {
    return (
        <ContactsContainer>
            {contacts.map(contact =>
                <div key={contact.id}>
                    <h3>{contact.number}</h3>
                    <p>{contact.description}</p>
                </div>)}
        </ContactsContainer>
    )
}

export default Contacts

const ContactsContainer = styled.div`
    padding: 12rem 7.6rem 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    h3 {
        font-size: 1.5rem;
        color: #fff;
        font-weight: 400;    
    }

    p {
        font-size: .8rem;
        color: #fff;
    }
`

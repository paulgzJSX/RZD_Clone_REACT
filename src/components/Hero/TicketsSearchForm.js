import styled from 'styled-components'
import { OriginDestinationInputShared, FromToShared } from '../../styles/SharedStyles'

const TicketsSearchForm = () => {
    return (
        <FormContainer>
            <Origin type="text" placeholder='Откуда' />
            <Destination type="text" placeholder='Куда' />
            <FromDate type="text" placeholder='Туда' />
            <ToDate type="text" placeholder='Обратно' />
            <Button>Найти</Button>
        </FormContainer>
    )
}

export default TicketsSearchForm

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 5.3rem;
`

const Origin = styled.input` ${OriginDestinationInputShared}; `
const Destination = styled.input` ${OriginDestinationInputShared}; `

const FromDate = styled.input` ${FromToShared}; `
const ToDate = styled.input` ${FromToShared}; `

const Button = styled.button`
    padding: 1.17rem;
    border: none;
    width: 10rem;
    background-color: #CA1110;
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(214, 205, 205);
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s ease-in-out;
    font-family: Russian Rail G Pro;    

    &:hover {
        background-color: #E21A1A;
        color: #fff;
    }
`

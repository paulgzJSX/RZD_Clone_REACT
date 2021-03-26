import SocialLinks from './SocialLinks'
import styled from 'styled-components'

const BottomRow = () => {
    return (
        <BottomRowContainer>
            <p>© ОАО «РЖД», 2003 - 2021</p>
            <Right>
                <License>
                    <p>Свидетельство о регистрации СМИ Эл.№ФС77-25927</p>
                    <p>При использовании любых материалов ссылка на rzd.ru обязательна</p>
                </License>
                <SocialLinks />
            </Right>
        </BottomRowContainer>
    )
}

export default BottomRow

const BottomRowContainer = styled.div`
    padding: 2.3rem 0;
    margin: 0 7.6rem;
    border-top: 1px solid grey;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;  
    
    p {
        font-size: .9rem;
        color: #6D7B89;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
`

const License = styled.div`
    margin-right: 2rem;
`

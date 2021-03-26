import styled from 'styled-components'

const NewsCard = ({ story }) => {
    return (
        <NewsCardContainer>
            <p>{story.title}</p>
            <NewsMeta>
                <ul>
                    {story.links.map((link, idx) =>
                        <li key={idx}><a href="#">{link}</a></li>)}
                </ul>
                <NewsTime>
                    <Date>{story.date}</Date>
                    <Time>{story.time}</Time>
                </NewsTime>
            </NewsMeta>
        </NewsCardContainer>
    )
}

export default NewsCard

const NewsCardContainer = styled.div`
    height: 272px;
    background-color: #fff;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    

    p {
        font-weight: 500;
    }
`

const NewsMeta = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: .7rem;
        line-height: 1rem;

        li a {
            font-size: .8rem;
            color: #909296;
            margin-right: .8rem;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                height: 2px;
                width: 2px;
                border-radius: 50%;
                background-color: #909296;
                top: 8px;
                right: -8px;
            }
        }
    }
`

const NewsTime = styled.div`
    padding-top: .9rem;
    border-top: 1px solid #d9dbdf; 
    
    p {
        font-family: Russian Rail G Pro;
        display: inline-block;    
    }
`

const Date = styled.p`
    margin-right: 1rem;
    color: #E21A1A;    
`

const Time = styled.p`
    color: #a9aeba;
`



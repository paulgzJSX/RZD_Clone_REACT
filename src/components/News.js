import NewsCard from './News/NewsCard'
import { newsStories } from '../data/news'
import styled from 'styled-components'

const News = () => {
    return (
        <NewsContainer>
            <NewsHeading>
                <h1>Новости</h1>
                <p>Все новости</p>
            </NewsHeading>
            <NewsCards>
                {newsStories.map(story =>
                    <NewsCard key={story.id} story={story} />)}
            </NewsCards>
        </NewsContainer>
    )
}

export default News

const NewsContainer = styled.div`
    padding: 0 7.6rem;
    height: 268px;    
`

const NewsHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;   
    
    h1 {
        font-weight: 400;
        font-size: 2rem;
        font-family: Russian Rail G Pro;    
    }

    p {
        font-size: .9rem;
    }
`

const NewsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
`

import styled, { css } from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

export const HeaderLink = styled.div`
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    border-right: 1px solid rgb(228, 225, 225);
    cursor: pointer;    
`

export const IconShared = css`
    font-size: 1.3rem;
    cursor: pointer;
    opacity: .6;    
`

export const LinkShared = css`
    margin-right: .7rem;
    font-size: .8rem;     
`

export const OriginDestinationInputShared = css`
    padding: 1.3rem;
    width: 20rem;
    border: none;
    border-right: .5px solid rgba(0, 0, 0, .2);
    outline-color: #E21A1A;
    text-overflow: ellipsis;
`

export const FromToShared = css`    
    padding: 1.3rem;
    width: 14rem;
    border: none;
`

export const CardShared = styled.div`
    background-color: #fff;
    height: 17rem;
    padding: 1.5rem 2rem; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    ${props => props.image && css`
        background: url(${props.image}) no-repeat center/cover;
    `}
`

export const SmallP = styled.p`
    font-size: .8rem;
    opacity: .6;    
`

export const SmallPBlack = styled.p`
    font-size: .8rem;

    a {
        color: #CA1110;
    }
`

export const Title = styled.div`
    color: ${props => props.color || 'black'};
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-size: 1.5rem;
    cursor: pointer;
    line-height: 1.5rem;
    font-family: 'Russian Rail G Pro', sans-serif;
    margin-bottom: ${props => props.marginBottom};
`

export const More = styled.p`
    margin-right: .5rem;
    text-transform: uppercase;
    font-family: Russian Rail G Pro;
    font-size: .9rem;
    opacity: .8;
    line-height: 1.5rem;
    color: #fff;
`

export const ArrowIcon = styled(BsArrowRight)`
    font-size: 1.5rem;
    opacity: .8;
    line-height: 1.5rem;
`

export const BigIcon = styled(BsArrowRight)`
    font-size: 2rem;
`

export const TrainCard = styled.div`
    height: 336px;  
    padding: 2rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    cursor: pointer;  
    background: url(${props => props.image}) no-repeat center/cover;
    ${props => props.highSpeed && css`
        grid-column: 1/3;
    `};
    ${props => props.multiModal && css`
        grid-column: 3/-1;
    `};

    &:hover {
        background: linear-gradient(
            rgba(30, 30, 43, 0.137), 
            rgba(39, 39, 51, 0.45)),
            url(${props => props.image}) no-repeat center/cover;  
    }

    &:hover ${BigIcon} {
        color: #E21A1A;
    }
`


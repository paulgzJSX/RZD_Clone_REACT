import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoContainer>
            <a href='https://www.rzd.ru'>
                <svg width='55px' height='25px'>
                    <svg id='rzdLogo' data-name='rzdLogo' viewBox='0 0 55.12 24.41'>
                        <path d='M 39.12,2.21v.9h7.7a2.5 2.5 0 0 1 1.8 0.5 a 2.5 2.5 0 0 1 0.5 1.8 V 13 a 2.5 2.5 0 0 1 -0.5 1.8 a 2.62 2.62 0 0 1 -1.8 0.5 h -3.7 c -0.6 0 -1.5 0 -1.8 -0.7 a 1.73 1.73 0 0 1 0.5 -1.8 l 5 -6.6 h -7.7 L 36 10.31 a 3.79 3.79 0 0 0 -1 2 a 3 3 0 0 0 1 2 l 0.8 1 h 0 a 8.49 8.49 0 0 0 2.5 2.5 a 8.8 8.8 0 0 0 3.9 0.5 h 3.3 c 1.9 0 4.8 0 6.7 -1.9 s 1.9 -4.7 1.9 -5.7 V 7.61 c 0 -1 0 -3.8 -1.9 -5.7 S 48.42 0 46.52 0 h -5.3 a 2.38 2.38 0 0 0 -1.7 0.5 A 2.83 2.83 0 0 0 39.12 2.21 Z m -9.2 3.9 h 7.7 l -9.2 12.2 h -7.7 Z m -29.4 0.6 A 2 2 0 0 0 0 8.31 v 0.9 h 3.1 v 15.2 h 6.1 V 9.21 h 6 c 0.6 0 1.5 0 1.8 0.7 a 1.73 1.73 0 0 1 -0.5 1.8 l -5 6.6 h 7.7 l 3.1 -4.1 a 3.79 3.79 0 0 0 1 -2 a 3 3 0 0 0 -1 -2 l -0.8 -1 h 0 A 8.49 8.49 0 0 0 19 6.71 a 8.8 8.8 0 0 0 -3.9 -0.5 H 2.22 A 1.68 1.68 0 0 0 0.52 6.71 Z'
                            fill='white'></path>
                    </svg>
                </svg>
            </a>
        </LogoContainer>
    )
}

export default Logo

const LogoContainer = styled.div`
    background-color: red;
    height: 100%;
    width: 6.5rem;
    display: grid;
    place-items: center;
    padding: 1rem;
    cursor: pointer;    
`

import styled from 'styled-components'


export const Header = styled.header`
    background: var(--teal-900);
    padding: 2rem 0 10rem;
    text-align: center;

    img {
        color: #fff;
        font-weight: 100;
    }
`

export const Footer = styled.footer`
    text-align: center;
    padding: 4rem 0 2rem;
    color: var(--teal-900);

    opacity: 0.6;
`

export const Balance = styled.section`
    margin-top: -8rem;

    h2 {
        color:white;
        margin-top:0;
    }

    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
`

export const Card = styled.div`
    background: ${props => props.total ? 'var(--teal-100)' : "white"};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    margin-bottom: 2rem;

    color:  ${props => props.total ? "white" : 'var(--teal-900)'};

    h3{
        font-weight: normal;
        font-size: 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p {
        font-size: 2rem;
        line-height: 3rem;
        white-space:nowrap;
        margin-top: 1rem;
    }
`
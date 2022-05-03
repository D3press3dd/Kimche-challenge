import styled from 'styled-components';
import breakpoints from '../theme/breakpoints';

const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 2rem;

    p{
          font-size: 1.2rem;
          font-weight: 900;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0 2rem;
        p{
            font-size: 1rem;
        }
        
    }
    
`;

export default Footer;

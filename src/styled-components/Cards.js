import styled from 'styled-components';
import breakpoints from '../theme/breakpoints';
import { colors } from '../theme/colors';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: max-content;
  gap: 4rem;
  margin: 5rem 0;
  

  h2{
    font-size: 2.4rem;
    margin-bottom: 2rem;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 90%;
    justify-content: center;
    
  }
`;

const Card = styled.div`
  border-radius: ${colors.borderRadius};
  padding: 2rem;
  position: relative;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  min-height: 85%;
  transition: box-shadow .3s ease-in-out;

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  h3{
    font-size: 1.6rem;
  }

  span{
    font-weight: 400;
    margin-bottom: 1rem;
  }

  
 
`;

const CardInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  p{
    font-size: 1.5rem;
    font-weight: bold;
  }

`;

const Phone = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: -0.8rem;
  right: -3rem;
  transform: rotate(31deg);
  transition: all 0.3s ease-in-out;

  &:hover{
    transform: rotate(25deg);
}

  p{
    padding: .5rem 1rem;
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    border: none;
    background: ${colors.buttonColor};
    box-shadow: 0 5px #000f26;
}
`;

const Language = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  

  p{
    background: ${colors.buttonColor};
    color: white;
    padding: .5rem;
    font-weight: 900;
    font-size: 1.2rem;
    border-radius: .3rem;
    border: ${colors.border};

  }

  

`;

export {
  CardContainer, Card, CardInfo, Phone, Language,
};

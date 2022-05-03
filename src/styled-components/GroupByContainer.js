import styled from 'styled-components';
import breakpoints from '../theme/breakpoints';

const GroupByContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: ${breakpoints.smallMobile}) {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;      
  }

`;

const GroupByTitle = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-weight: 900;

  @media (max-width: ${breakpoints.mobile}) {
      letter-spacing: 0;
      font-size: 1.8rem;      
  }

  @media (max-width: ${breakpoints.smallMobile}) {
      font-size: 1.6rem;      
  }
`;

const GroupByButtonContainer = styled.div`     
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;
   justify-content:space-between ;

   
`;

export { GroupByContainer, GroupByTitle, GroupByButtonContainer };

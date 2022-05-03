import { BiSearchAlt2 } from 'react-icons/bi';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import breakpoints from '../theme/breakpoints';

const Container = styled.main`
  padding: 2rem 25%;

  @media (max-width: ${breakpoints.desktop}) {
      padding: 2rem 10%;
  }

  @media (max-width: ${breakpoints.mobile}) {
      padding: 2rem;
  }
  `;

const MainTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  position: relative;

  

  @media (max-width: ${breakpoints.smallMobile}) {
      font-size: 2rem;
      margin-bottom: 1rem;
        
  }
  `;

const SearchContainer = styled.div`
  position: relative;

`;

const LupaIcon = styled(BiSearchAlt2)`
  position: absolute;
  font-size: 2.4rem;
  top: 1rem;
  left: 1rem;

  
`;

const Search = styled.input`
  width: 100%;
  background-color:${colors.background};
  border-radius: ${colors.borderRadius};
  padding: 1rem 2rem 1rem 4rem;
  border: ${colors.border};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: all .3s ease-in-out;

  &:hover,&:focus{
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  &:focus-visible {
    outline:none;
  }
`;

export {
  Container, MainTitle, SearchContainer, LupaIcon, Search,
};

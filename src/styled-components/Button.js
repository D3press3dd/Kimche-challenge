import styled from 'styled-components';
import { motion } from 'framer-motion';
import { timeDuration, colors } from '../theme/colors';

const Button = styled(motion.button)`
  background-color: ${(props) => (props.active ? colors.background : colors.buttonColor)};
  border-radius: ${colors.borderRadius};
  border: ${(props) => (props.active ? colors.borderHover : colors.border)};
  color: ${(props) => (props.active ? colors.buttonColor : colors.whiteText)};
  cursor: pointer;
  font-weight: 900;
  padding: 1rem 4rem;
  transition: background-color ${timeDuration.transition}, box-shadow ${timeDuration.transition} , border ${timeDuration.transition}, color ${timeDuration.transition} ease-in;

  

  &:hover{
    background-color: ${colors.background};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border: ${colors.borderHover} ;
    color: ${colors.buttonColor};

  }

  @media (max-width: 920px) {
        padding: 1rem 2rem;
      
  }

  @media (max-width: 420px) {
  padding: .5rem 1rem;
        
  }
`;

export default Button;

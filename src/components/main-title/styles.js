import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledMainTitle = styled(motion.div)``;

const StyledMainLetter = styled(motion.span)`
	font-size: 5rem;
	letter-spacing: 0.2rem;
	line-height: 5rem;
	color: ${COLORS.secondary};
	color: red;
`;

export { StyledMainLetter, StyledMainTitle };

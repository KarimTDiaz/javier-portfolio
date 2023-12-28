import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const HomeContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

const TitleContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleLetter = styled(motion.span)`
	position: relative;
	font-size: 20vw;
	font-weight: 800;
	margin: 0;
`;
const HiddenTitle = styled(motion.div)`
	position: absolute;
	bottom: 8vh;
	width: 100%;
	height: 70%;
	transform: translateY(50%);
	background-color: ${COLORS.primary};
`;
export { HiddenTitle, HomeContainer, TitleContainer, TitleLetter };

import { motion } from 'framer-motion';
import styled from 'styled-components';

const TransitionSlideIn = styled(motion.div)`
	position: fixed;
	z-index: 10000;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: black;
	transform-origin: bottom;
`;

const TransitionSlideOut = styled(motion.div)`
	position: fixed;
	z-index: 10000;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: black;
	transform-origin: top;
`;

export { TransitionSlideIn, TransitionSlideOut };

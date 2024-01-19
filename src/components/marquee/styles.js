import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledMarquee = styled.div`
	position: fixed;
	left: -15rem;
	bottom: 15rem;
	width: 60vw;
	max-width: 100%;
	height: 100px;
	overflow-x: hidden;
	transform: rotate(45deg);
`;

const StyledTrack = styled(motion.div)`
	position: absolute;
	white-space: nowrap;
`;

export { StyledMarquee, StyledTrack };

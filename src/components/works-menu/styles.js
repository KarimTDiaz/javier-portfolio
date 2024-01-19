import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WorksMenuList = styled.ul`
	text-align: center;
	@media screen and (min-width: 1024px) {
		position: absolute;
		right: 5vw;
		top: 15vh;
		z-index: 10;
		text-align: left;
	}
`;

const WorksMenuItem = styled(motion.li)`
	margin-bottom: 2rem;
	@media screen and (min-width: 1024px) {
		&:hover {
			transform: translateX(2%);
		}
		transition: transform 0.1s;
	}
`;

const WorksMenuLink = styled(NavLink)``;

export { WorksMenuItem, WorksMenuLink, WorksMenuList };

import { motion } from 'framer-motion';
import styled from 'styled-components';

const WorksMenuList = styled.ul`
	text-align: center;
`;

const WorksMenuItem = styled(motion.li)`
	margin-bottom: 2rem;
	& > :last-child {
		margin-bottom: 0;
	}
	@media screen and (min-width: 1024px) {
		&:hover {
			transform: translateX(2%);
		}
		transition: transform 0.1s;
	}
`;

const WorksMenuLink = styled.span``;

export { WorksMenuItem, WorksMenuLink, WorksMenuList };

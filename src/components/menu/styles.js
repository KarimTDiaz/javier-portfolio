import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const MenuList = styled.ul`
	position: relative;
	& > :nth-child(1) {
		width: 100vw;
	}
	& > :nth-child(2) {
		left: 1rem;
		/* height: 100vh; */
	}
	& > :nth-child(3) {
		right: 1rem;
		/* height: 100vh; */
	}
`;

const MenuListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 1rem;
`;

const MenuLink = styled(NavLink)`
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.xxxs};
`;

export { MenuLink, MenuList, MenuListItem };

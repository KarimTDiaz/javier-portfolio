import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const MenuList = styled.ul`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (min-width: 1440px) {
	}
	& > :nth-child(1) {
		width: 100vw;
	}
	& > :nth-child(2) {
		left: 1rem;
		@media screen and (min-width: 1440px) {
			display: ${({ path }) => path === '/works' && 'none'};
			height: ${({ path }) => path !== '/works' && '100vh'};
		}
	}
	& > :nth-child(3) {
		right: 1rem;
		@media screen and (min-width: 1440px) {
			height: ${({ path }) => path !== '/works' && '100vh'};
		}
	}
`;

const MenuListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 1rem;
	z-index: 1000;
`;
const RollText = styled.span`
	display: block;
	position: relative;
	transition: all 420ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const MenuLink = styled(NavLink)`
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.xxxs};
	overflow: hidden;
	@media screen and (min-width: 640px) {
		font-size: ${FONT_SIZE.s};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${FONT_SIZE.l};
	}
	@media screen and (min-width: 1440px) {
		height: 35px;
		padding: 0.5rem;
		font-size: ${FONT_SIZE.xl};
		&:hover {
			${RollText}:first-child {
				margin-top: -30px;
			}
		}
	}
`;

export { MenuLink, MenuList, MenuListItem, RollText };

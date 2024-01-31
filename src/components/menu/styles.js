import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const MenuList = styled.ul`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${({ path }) => path === '/works' && '2rem'};
	@media screen and (min-width: 1440px) {
	}
	& > :nth-child(1) {
		width: 100vw;
	}
	& > :nth-child(2) {
		left: 1rem;
		display: ${({ path }) => path === '/works' && 'none'};
		@media screen and (min-width: 1440px) {
			top: ${({ path }) => path !== '/' && '2rem'};
			height: ${({ path }) => (path !== '/' ? 0 : '100vh')};
		}
	}
	& > :nth-child(3) {
		right: 1rem;
		@media screen and (min-width: 1440px) {
			top: ${({ path }) => path !== '/' && '2rem'};
			height: ${({ path }) => (path !== '/' ? 0 : '100vh')};
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
	transition: margin 420ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const MenuLink = styled(NavLink)`
	height: 28px;
	background-color: red;
	padding: 0.5rem;
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.xxxs};
	overflow: hidden;
	&:hover {
		${RollText}:first-child {
			margin-top: -12px;
		}
	}
	@media screen and (min-width: 640px) {
		height: 19px;
		padding: 0.3rem;
		font-size: ${FONT_SIZE.s};
		&:hover {
			${RollText}:first-child {
				margin-top: -20px;
			}
		}
	}
	@media screen and (min-width: 1024px) {
		height: 28px;
		padding: 0.4rem;
		font-size: ${FONT_SIZE.l};
		&:hover {
			${RollText}:first-child {
				margin-top: -25px;
			}
		}
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

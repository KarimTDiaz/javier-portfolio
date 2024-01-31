import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/variables';

const drawLine = keyframes`
    0% {
    transform: scaleX(0);
    transform-origin: center;
  }
  100% {
    transform: scaleX(1);
    transform-origin: center;
  }
`;
const StyledSectionListItem = styled.li`
	display: flex;
	justify-content: space-between;
	position: relative;
	padding: 1rem 0;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${COLORS.secondary};
		bottom: 0;
		transform: scaleX(0);
		animation: ${drawLine} 0.5s linear forwards;
		animation-delay: ${({ delay }) => `0.${delay}s`};
	}
`;

export { StyledSectionListItem };

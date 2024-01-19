import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledTitle = styled.h2`
	margin: 0;
	font-family: ${({ font }) => font};
	font-size: ${({ size }) => size[0]};
	font-weight: 600;
	color: ${COLORS.secondary};
	@media screen and (min-width: 640px) {
		@media screen and (min-width: 640px) {
			font-size: ${({ size }) => size[1]};
		}
		@media screen and (min-width: 1024px) {
			font-size: ${({ size }) => size[2]};
		}
		@media screen and (min-width: 1440px) {
			font-size: ${({ size }) => size[3]};
		}
	}
`;

export { StyledTitle };

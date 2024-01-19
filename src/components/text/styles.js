import styled from 'styled-components';

const StyledText = styled.p`
	margin: 0;
	font-family: ${({ font }) => font};
	font-size: ${({ size }) => size[0]};
	@media screen and (min-width: 640px) {
		font-size: ${({ size }) => size[1]};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${({ size }) => size[2]};
	}
	@media screen and (min-width: 1440px) {
		font-size: ${({ size }) => size[3]};
	}
`;

export { StyledText };

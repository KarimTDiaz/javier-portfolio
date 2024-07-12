import styled from 'styled-components';

const AboutContainer = styled.div`
	position: relative;
	height: 100vh;
	padding: 5rem 1rem;
	@media screen and (min-width: 640px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1440px) {
		height: 500vh;
		padding-top: 10rem;
	}
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 0 2rem;
	@media screen and (min-width: 640px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1440px) {
		padding: 0 25rem;
	}
`;

export { AboutContainer, TextContainer };

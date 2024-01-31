import styled from 'styled-components';

const WorksContainer = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
	min-height: 100vh;
`;

const WorksPreviewsContainer = styled.div`
	display: none;
	@media screen and (min-width: 1024px) {
		display: block;
		position: fixed;
		z-index: -1;
		/* left: 5vw;
		bottom: 10vh; */
	}
`;

export { WorksContainer, WorksPreviewsContainer };

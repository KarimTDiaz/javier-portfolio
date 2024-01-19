import styled from 'styled-components';

const WorksContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 6rem 1rem 0 1rem;
`;

const WorksFlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10rem;
	@media screen and (min-width: 1024px) {
		flex-direction: row-reverse;
	}
`;

const WorksPreviewsContainer = styled.div`
	@media screen and (min-width: 1024px) {
		position: fixed;
		left: 5vw;
		bottom: 10vh;
	}
`;

export { WorksContainer, WorksFlexContainer, WorksPreviewsContainer };

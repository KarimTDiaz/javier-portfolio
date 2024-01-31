import styled from 'styled-components';

const WorkPreviewVideo = styled.video`
	display: none;
	width: 65vw;
	@media screen and (min-width: 1024px) {
		display: block;
	}
`;

export { WorkPreviewVideo };

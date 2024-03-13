import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectContainer = styled(motion.div)`
	padding: 5rem 1rem;
`;

const ProjectFlex = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		justify-content: center;
		flex-direction: row-reverse;
		gap: 5rem;
	}
`;

const ProjectDataContainer = styled.article`
	padding: 2rem 0 4rem 0;
	@media screen and (min-width: 1024px) {
		width: 50vw;
	}
`;
const ProjectDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-top: 4rem;
`;

const ProjectImagesContainer = styled(motion.div)`
	@media screen and (min-width: 1024px) {
		width: 50vw;
	}
`;

const ProjectTitle = styled(motion.h2)``;

export {
	ProjectContainer,
	ProjectDataContainer,
	ProjectDescriptionContainer,
	ProjectFlex,
	ProjectImagesContainer,
	ProjectTitle
};

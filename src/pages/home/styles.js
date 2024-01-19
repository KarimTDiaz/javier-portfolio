import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const HomeContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

const TitleContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleLetter = styled(motion.span)`
	position: relative;
	z-index: 100;
	font-size: 20vw;
	font-weight: 800;
	margin: 0;
	transform: translateY(100%);
`;
const HiddenTitle = styled(motion.div)`
	position: absolute;
	z-index: 1000;
	bottom: 8vh;
	width: 100%;
	height: 60%;
	transform: translateY(50%);
	background-color: ${COLORS.primary};
	@media screen and (min-width: 1024px) {
		transform: translateY(50%);
	}
	@media screen and (min-width: 1440px) {
		transform: translateY(60%);
	}
`;

const NameText = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	height: 100vh;
	width: 100vw;
`;

const RolText = styled(motion.div)`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 0;
	width: 100vw;
`;
const TopVideoContainer = styled(motion.div)`
	position: absolute;
	z-index: -1;
	top: 22vh;
	left: 25vw;
	width: 40vw;
	height: 40vh;
	background-color: ${COLORS.primary};
	@media screen and (min-width: 728px) {
		left: 30vw;
		top: 13vh;
		width: 30vw;
	}
	@media screen and (min-width: 1024px) {
		left: 30vw;
		top: 15vh;
		width: 30vw;
	}
	@media screen and (min-width: 1440px) {
		left: 35vw;
		top: 10vh;
		width: 20vw;
	}
`;
const TopVideo = styled(motion.video)`
	position: absolute;
	z-index: -10;
	width: 40vw;
	top: 22vh;
	left: 25vw;
	@media screen and (min-width: 728px) {
		left: 30vw;
		top: 13vh;
		width: 30vw;
	}
	@media screen and (min-width: 1024px) {
		left: 30vw;
		top: 15vh;
		width: 30vw;
	}
	@media screen and (min-width: 1440px) {
		left: 35vw;
		top: 10vh;
		width: 20vw;
	}
`;
const BottomLeftVideoContainer = styled(motion.div)`
	position: absolute;
	z-index: -1;
	bottom: 10vh;
	right: 18vw;
	width: 35vw;
	height: 50vh;
	background-color: ${COLORS.primary};
	@media screen and (min-width: 640px) {
		width: 25vw;
	}
	@media screen and (min-width: 728px) {
		width: 20vw;
	}
	@media screen and (min-width: 1440px) {
		width: 14vw;
		left: 1rem;
		bottom: 1rem;
	}
	@media screen and (min-width: 1720px) {
		width: 10vw;
		left: 1rem;
		bottom: 1rem;
	}
	@media screen and (min-width: 2100px) {
		width: 10vw;
		left: 3rem;
		bottom: 3rem;
	}
`;

const BottomLeftVideo = styled(motion.video)`
	position: absolute;
	z-index: -10;
	bottom: 10vh;
	right: 18vw;
	width: 30vw;
	@media screen and (min-width: 640px) {
		width: 25vw;
	}
	@media screen and (min-width: 728px) {
		width: 20vw;
	}
	@media screen and (min-width: 1440px) {
		width: 14vw;
		left: 1rem;
		bottom: 1rem;
	}
	@media screen and (min-width: 1720px) {
		width: 10vw;
		left: 1rem;
		bottom: 1rem;
	}
	@media screen and (min-width: 2100px) {
		width: 10vw;
		left: 3rem;
		bottom: 3rem;
	}
`;

const BottomRightVideoContainer = styled(motion.div)`
	position: absolute;
	width: 20vw;
	height: 30vh;
	background-color: ${COLORS.primary};
	@media screen and (min-width: 1440px) {
		bottom: 15rem;
		right: 18rem;
		width: 25vw;
	}
	@media screen and (min-width: 1720px) {
		width: 20vw;
		bottom: 10rem;
		right: 25rem;
	}
`;

const BottomRightVideo = styled.video`
	position: absolute;
	z-index: -1;
	width: 20vw;
	height: 30vh;
	@media screen and (min-width: 1440px) {
		bottom: 15rem;
		right: 18rem;
		width: 25vw;
	}
	@media screen and (min-width: 1720px) {
		width: 20vw;
		bottom: 10rem;
		right: 25rem;
	}
`;

const IconArchive = styled(motion.img)`
	position: absolute;
	width: 35vw;
	left: 5vw;
	bottom: 30vh;
	@media screen and (min-width: 640px) {
		width: 25vw;
	}
	@media screen and (min-width: 728px) {
		width: 20vw;
	}
	@media screen and (min-width: 1024px) {
		width: 18vw;
		left: 15vw;
		bottom: 40vh;
	}
	@media screen and (min-width: 1440px) {
		width: 10vw;
		left: 15vw;
		bottom: 40vh;
	}
`;

export {
	BottomLeftVideo,
	BottomLeftVideoContainer,
	BottomRightVideo,
	BottomRightVideoContainer,
	HiddenTitle,
	HomeContainer,
	IconArchive,
	NameText,
	RolText,
	TitleContainer,
	TitleLetter,
	TopVideo,
	TopVideoContainer
};

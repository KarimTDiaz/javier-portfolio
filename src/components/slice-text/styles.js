import styled from 'styled-components';
const Container = styled.div`
	position: relative;

	background-color: red;
`;
const CenterContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: perspective(1000px);
	transform: skewY(15deg);
	transition: 0.5s;

	&:hover {
		transform: perspective(1000px) translate(-50%, -50%);
		transform: skewY(0deg);
	}
`;

const Heading = styled.h1`
	span {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
		margin: 0;
		padding: 0;
		text-transform: uppercase;
		font-size: 5rem;
		color: #fff;
		transform-style: preserve-3d;
		transition: 0.8s;
	}

	span:nth-child(1) {
		clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
	}

	span:nth-child(2) {
		color: #5e17eb;
		transform: translate(-50%, -50%) skewX(-60deg);
		left: -15px;
		clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);
	}

	span:nth-child(3) {
		transform: translate(-50%, -50%) skewY(0deg);
		left: -30px;
		clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
	}

	${CenterContainer}:hover & {
		span:nth-child(2),
		span:nth-child(3) {
			transform: translate(-50%, -50%) skewX(0deg);
			left: 0;
			color: #fff;
		}
	}
`;

export { CenterContainer, Container, Heading };

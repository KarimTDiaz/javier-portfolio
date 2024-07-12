import {
	easeInOut,
	motion,
	useMotionValue,
	useScroll,
	useTransform
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

export const MouseImageTracker = ({ src }) => {
	const ref = useRef(null);
	const x = useMotionValue(200);
	const y = useMotionValue(200);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end end']
	});

	useEffect(() => {
		console.log({ scrollYProgress });
	}, [scrollYProgress]);

	const rotateX = useTransform(y, [0, 400], [1, -1], {
		ease: easeInOut
	});
	const rotateY = useTransform(x, [0, 1000], [-1, 1], {
		ease: easeInOut
	});
	const opacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
	const scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.2]);
	const handleMouse = event => {
		x.set(event.pageX);
		y.set(event.pageY);
	};

	return (
		<TrackerWrapper onMouseMove={handleMouse}>
			<motion.img
				{...src}
				style={{
					position: 'sticky',
					top: '0',
					width: '100%',
					rotateX,
					rotateY,
					scale,
					opacity
				}}
			/>
		</TrackerWrapper>
	);
};

const TrackerWrapper = styled.div`
	position: sticky;
	top: 15rem;
	width: 90vw;
	padding-top: 4rem;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	perspective: 400;
	@media screen and (min-width: 640px) {
	}
	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1440px) {
		top: 0;
		width: 80vw;
		border: 80px solid ${COLORS.primary};
		border-right: 275px solid ${COLORS.primary};
		border-left: 275px solid ${COLORS.primary};
		perspective: 400;
	}
`;

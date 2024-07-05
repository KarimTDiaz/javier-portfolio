import {
	easeInOut,
	motion,
	useMotionValue,
	useScroll,
	useTransform
} from 'framer-motion';
import { useEffect, useRef } from 'react';
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
		<div
			style={{
				position: 'sticky',
				top: '0',
				width: '80vw',
				marginLeft: 'auto',
				marginRight: 'auto',
				overflow: 'hidden',
				/* display: 'flex', */
				/* placeItems: 'center',
				placeContent: 'center', */
				border: `250px solid ${COLORS.primary}`,
				borderRight: `275px solid ${COLORS.primary}`,
				borderLeft: `275px solid ${COLORS.primary}`,
				perspective: 400
			}}
			onMouseMove={handleMouse}
		>
			<motion.img
				{...src}
				style={{
					position: 'sticky',
					top: '0',
					width: '100%',
					/* height: '100vh', */
					rotateX,
					rotateY,
					scale,
					opacity
				}}
			/>
		</div>
	);
};

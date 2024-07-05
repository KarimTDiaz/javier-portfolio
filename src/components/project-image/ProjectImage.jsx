import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StyledImage } from './styles';

const ProjectImage = ({ src }) => {
	const ref = useRef(null);
	const isInView = useInView(
		ref,
		{ once: true },
		{
			margin: '0px 100px -500px 0px'
		}
	);

	return (
		<StyledImage
			ref={ref}
			src={src}
			alt='Imagen de Proyecto'
			style={{
				transform: isInView ? 'none' : 'translateY(-200px)',
				opacity: isInView ? 1 : 0,
				transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
			}}
		/>
	);
};

export default ProjectImage;

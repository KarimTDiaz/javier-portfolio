import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import ProjectImage from '../../components/project-image/ProjectImage';
import SectionList from '../../components/section-list/SectionList';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import { WORKS_ITEMS } from '../../constants/works';
import {
	ProjectContainer,
	ProjectDataContainer,
	ProjectDescriptionContainer,
	ProjectFlex,
	ProjectImagesContainer
} from './styles';

const Project = () => {
	const ref = useRef(null);
	const { projectId } = useParams();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end end']
	});

	useEffect(() => {
		console.log({ scrollYProgress });
	}, [scrollYProgress]);

	const translateY = useTransform(scrollYProgress, [0, 1], ['0', '15%']);
	const opacity = useTransform(scrollYProgress, [1, 1], [1, 1]);
	const project = WORKS_ITEMS.find(item => item.project === projectId);

	return (
		<>
			<ProjectContainer>
				<Title font={FONT_FAMILY.primary} size={[FONT_SIZE.xxxl]}>
					{project.project}
				</Title>
				<ProjectFlex ref={ref}>
					<ProjectDataContainer style={{ opacity, y: translateY }}>
						<SectionList items={project.projectFunctions} />
						<ProjectDescriptionContainer>
							<Title font={FONT_FAMILY.secondary} size={[FONT_SIZE.xxl]} blend>
								DESCRIPTION
							</Title>
							{project.description.map(item => (
								<div key={v4()}>
									<Text font={FONT_FAMILY.primary} size={[FONT_SIZE.xxs]}>
										{item}
									</Text>
								</div>
							))}
						</ProjectDescriptionContainer>
					</ProjectDataContainer>

					<div>
						<ProjectImagesContainer>
							{project.images.map(item => (
								<ProjectImage key={v4()} src={item} />
							))}
						</ProjectImagesContainer>
					</div>
				</ProjectFlex>
			</ProjectContainer>
		</>
	);
};

export default Project;

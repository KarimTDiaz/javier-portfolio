import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import ProjectImage from '../../components/project-image/ProjectImage';
import SectionList from '../../components/section-list/SectionList';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import Transition from '../../components/transition/Transition';
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
	const { projectId } = useParams();

	const project = WORKS_ITEMS.find(item => item.project === projectId);

	return (
		<>
			<ProjectContainer>
				<Title font={FONT_FAMILY.primary} size={[FONT_SIZE.xxxl]}>
					{project.project}
				</Title>
				<ProjectFlex>
					<ProjectDataContainer>
						<div>
							<SectionList items={project.projectFunctions} />
							<ProjectDescriptionContainer>
								<Title font={FONT_FAMILY.secondary} size={[FONT_SIZE.xxl]}>
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
						</div>
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

export default Transition(Project);

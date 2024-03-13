import { useLocation } from 'react-router-dom';
import { v4 } from 'uuid';
import ProjectImage from '../../components/project-image/ProjectImage';
import SectionList from '../../components/section-list/SectionList';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import Transition from '../../components/transition/Transition';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import {
	ProjectContainer,
	ProjectDataContainer,
	ProjectDescriptionContainer,
	ProjectFlex,
	ProjectImagesContainer
} from './styles';

const Project = () => {
	const { state } = useLocation();

	return (
		<>
			<ProjectContainer>
				<Title font={FONT_FAMILY.primary} size={[FONT_SIZE.xxxl]}>
					{state.project}
				</Title>
				<ProjectFlex>
					<ProjectDataContainer>
						<div>
							<SectionList items={state.projectFunctions} />
							<ProjectDescriptionContainer>
								<Title font={FONT_FAMILY.secondary} size={[FONT_SIZE.xxl]}>
									DESCRIPTION
								</Title>
								{state.description.map(item => (
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
							{state.images.map(item => (
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

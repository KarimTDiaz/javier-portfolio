import { useLocation } from 'react-router-dom';
import SectionList from '../../components/section-list/SectionList';
import Title from '../../components/title/Title';
import Transition from '../../components/transition/Transition';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import { ProjectContainer, ProjectDataContainer } from './styles';

const Project = () => {
	const { state } = useLocation();

	return (
		<>
			<ProjectContainer>
				<Title font={FONT_FAMILY.primary} size={[FONT_SIZE.xxl]}>
					{state.project}
				</Title>
				<ProjectDataContainer>
					<SectionList items={state.projectFunctions} />
				</ProjectDataContainer>
			</ProjectContainer>
		</>
	);
};

export default Transition(Project);

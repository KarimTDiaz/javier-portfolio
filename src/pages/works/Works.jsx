import { useState } from 'react';
import Transition from '../../components/transition/Transition';
import WorksMenu from '../../components/works-menu/WorksMenu';
import WorksPreview from '../../components/works-preview/WorksPreview';
import { WorksContainer, WorksPreviewsContainer } from './styles';

const Works = () => {
	const [previewVideo, setPreviewVideo] = useState();

	return (
		<WorksContainer>
			<WorksMenu setPreviewVideo={setPreviewVideo} />
			<WorksPreviewsContainer>
				<WorksPreview src={previewVideo} />
			</WorksPreviewsContainer>
		</WorksContainer>
	);
};

export default Transition(Works);

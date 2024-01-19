import { useState } from 'react';
import Marquee from '../../components/marquee/Marquee';
import Transition from '../../components/transition/Transition';
import WorksMenu from '../../components/works-menu/WorksMenu';
import WorksPreview from '../../components/works-preview/WorksPreview';
import {
	WorksContainer,
	WorksFlexContainer,
	WorksPreviewsContainer
} from './styles';

const Works = () => {
	const [previewVideo, setPreviewVideo] = useState();
	return (
		<WorksContainer>
			<WorksFlexContainer>
				<WorksMenu setPreviewVideo={setPreviewVideo} />
				<WorksPreviewsContainer>
					<WorksPreview src={previewVideo} />
				</WorksPreviewsContainer>
				<Marquee />
			</WorksFlexContainer>
		</WorksContainer>
	);
};

export default Transition(Works);

import { WorkPreviewVideo } from './styles';

const WorksPreview = ({ src }) => {
	return <WorkPreviewVideo src={src} autoPlay muted loop />;
};

export default WorksPreview;

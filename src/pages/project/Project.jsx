import { useParams } from 'react-router-dom';
import SliceText from '../../components/slice-text/SliceText';

const Project = ({ project }) => {
	const { projectId } = useParams();
	console.log(projectId);
	return (
		<>
			<h1>{projectId}</h1>
			<SliceText />
		</>
	);
};

export default Project;

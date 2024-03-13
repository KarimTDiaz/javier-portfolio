import { useNavigate } from 'react-router-dom';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import { WORKS_ITEMS } from '../../constants/works';
import Text from '../text/Text';
import Title from '../title/Title';
import { WorksMenuItem, WorksMenuLink, WorksMenuList } from './styles';

const WorksMenu = ({ setPreviewVideo }) => {
	const navigate = useNavigate();
	return (
		<nav>
			<WorksMenuList>
				{WORKS_ITEMS.map((item, index) => (
					<WorksMenuItem
						key={item.id}
						onClick={() => navigate(`/works/${item.project}`, { state: item })}
						onMouseOver={() => setPreviewVideo(item.preview)}
						onMouseLeave={() => setPreviewVideo('')}
					>
						<WorksMenuLink>
							<Title
								size={[FONT_SIZE.xl, FONT_SIZE.xxl]}
								font={FONT_FAMILY.secondary}
							>
								{item.project}
							</Title>
							<Text size={[FONT_SIZE.xxxs]} font={FONT_FAMILY.primary}>
								{item.rol}
							</Text>
						</WorksMenuLink>
					</WorksMenuItem>
				))}
			</WorksMenuList>
		</nav>
	);
};

export default WorksMenu;

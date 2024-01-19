import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import { WORKS_ITEMS } from '../../constants/works';
import Text from '../text/Text';
import Title from '../title/Title';
import { WorksMenuItem, WorksMenuLink, WorksMenuList } from './styles';

const WorksMenu = ({ setPreviewVideo }) => {
	return (
		<nav>
			<WorksMenuList>
				{WORKS_ITEMS.map((item, index) => (
					<WorksMenuItem>
						<WorksMenuLink
							to={`/works/${item.project}`}
							onMouseOver={() => setPreviewVideo(item.preview)}
						>
							<Title
								size={[FONT_SIZE.xl, FONT_SIZE.xxl, FONT_SIZE.xxxl]}
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

import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import Text from '../text/Text';
import Title from '../title/Title';
import { StyledSectionListItem } from './styles';

const SectionListItem = ({ item, delay }) => {
	return (
		<StyledSectionListItem delay={delay}>
			<Title
				size={[FONT_SIZE.s, FONT_SIZE.xxl]}
				font={FONT_FAMILY.secondaryLightSlanted}
			>
				{item.field}
			</Title>
			<Text
				size={[FONT_SIZE.s, FONT_SIZE.xl]}
				font={FONT_FAMILY.secondaryLight}
			>
				{item.value}
			</Text>
		</StyledSectionListItem>
	);
};

export default SectionListItem;
